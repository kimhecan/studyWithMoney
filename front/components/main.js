import React from 'react';
import { Carousel, List, Typography, Divider } from 'antd';

const data = [
  'Racing car sprays burning fuel into crowd.',
  'Japanese princess to wed commoner.',
  'Australian walks 100km after outback crash.',
  'Man charged over missing wedding girl.',
  'Los Angeles battles huge wildfires.',
];

const Main = () => {
  return (
    <>
      <div style={{ margin: '20px 20px', marginBottom: '100px' }}>
        <Carousel autoplay style={{ textAlign: 'center', height: '170px', lineHeight: '160px', background: '#364d79', overflow: 'hidden' }}>
          <div>
            <h3 style={{ color: '#fff' }}>1</h3>
          </div>
          <div>
            <h3 style={{ color: '#fff' }}>2</h3>
          </div>
          <div>
            <h3 style={{ color: '#fff' }}>3</h3>
          </div>
          <div>
            <h3 style={{ color: '#fff' }}>4</h3>
          </div>
        </Carousel>
      </div>
      <Divider orientation="left" style={{ fontWeight: 'bold', margin: '10px 20px' }}>최근 질문</Divider>
      <div style={{ display: 'flex', flexDirection: 'row', margin: '20px 20px' }}>
        <List
          style={{ flex: '2' }}
          size="small"
          header={<div>최근 질문</div>}
          bordered
          dataSource={data}
          renderItem={(item) => (
            <List.Item>
              <Typography.Text mark>[ITEM]</Typography.Text> {item}
            </List.Item>
          )}
        />
        <img style={{ flex: '1', height: '230px' }} src="https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png" alt="aa" />
      </div>
      <Divider orientation="left" style={{ fontWeight: 'bold', marginTop: '80px', margin: '10px 20px' }}>인기 게시글</Divider>
      <div style={{ display: 'flex', flexDirection: 'row', margin: '20px 20px' }}>
        <img style={{ flex: '1', height: '230px' }} src="https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png" alt="aa" />
        <List
          style={{ flex: '2' }}
          size="small"
          header={<div>인기 게시글</div>}
          bordered
          dataSource={data}
          renderItem={(item) => (
            <List.Item>
              <Typography.Text mark>[ITEM]</Typography.Text> {item}
            </List.Item>
          )}
        />
      </div>
    </>
  );
};

export default Main;
