import React, { useState } from 'react';
import { Cascader, Button } from 'antd';
import { setContext } from 'redux-saga/effects';

const Selection = () => {
  const [collage, setCollage] = useState();
  const [department, setDepartment] = useState();
  const [grade, setGrade] = useState();
  const [professor, setProfessor] = useState();

  const options = [
    {
      value: '공과대학',
      label: '공과대학',
      children: [
        {
          value: '나무물리학과',
          label: '나무물리학과',
          children: [
            {
              value: 'xihu',
              label: 'West Lake',
            },
          ],
        },
        {
          value: '토목공사학과',
          label: '토목공사학과',
          children: [
            {
              value: '1학년',
              label: '1학년',
              children: [
                {
                  value: '김희찬 교수',
                  label: '김희찬 교수',
                },
              ],
            },
          ],
        },
      ],
    },
    {
      value: 'jiangsu',
      label: 'Jiangsu',
      children: [
        {
          value: 'nanjing',
          label: 'Nanjing',
          children: [
            {
              value: 'zhonghuamen',
              label: 'Zhong Hua Men',
            },
          ],
        },
      ],
    },
  ];
  const onChange = (value) => {
    console.log(value);
    setCollage(value[0]);
    setDepartment(value[1]);
    setGrade(value[2]);
    setProfessor(value[3]);
  };

  function handleAreaClick(e, label, option) {
    e.stopPropagation();
    console.log('clicked', label, option);
  }

  const displayRender = (labels, selectedOptions) => {
    return labels.map((label, i) => {
      const option = selectedOptions[i];
      if (i === labels.length - 1) {
        return (
          <span key={option.value}>
            {label} (<a onClick={(e) => handleAreaClick(e, label, option)} />)
          </span>
        );
      }
      return <span key={option.value}>{label} / </span>;
    });
  };

  const handleBtnClick = () => {
    const data = {
      collage,
      department,
      grade,
      professor,
    };
  };

  return (
    <>
      <Cascader
        options={options}
        autoFocus
        expandTrigger="hover"
        displayRender={displayRender}
        onChange={onChange}
        style={{ width: '100%' }}
        placeholder="정보를 선택해 주세요"
      />
      <Button type="primary" onClick={handleBtnClick}>검색</Button>
    </>
  );
};

export default Selection;
