import type { ComponentStory } from '@storybook/react';
import { Col, Row } from 'antd';
import Icon from '../Icon';
import Collapse from './index';
const { Panel } = Collapse;

export default {
  component: Collapse,
  title: 'Components/Collapse',
};

const onChange = (key: string | string[]) => {
  console.log(key);
};
const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;
const Template: ComponentStory<typeof Collapse> = (args) => (
  <div style={{ background: '#EDF0F3', padding: '16px' }}>
    <Row gutter={16}>
      <Col span={6}>
        <Collapse
          defaultActiveKey={['1']}
          expandIcon={({ isActive }) => (
            <Icon
              icon="arrow-down"
              className={`f-14 transition-all duration-500 ${isActive ? 'rotate-!180' : ''}`}
            />
          )}
          onChange={onChange}
          bordered={false}
        >
          <Panel
            header={
              <div>
                <Icon icon="alert-info" />
                <span className="title">This is panel header 1</span>
              </div>
            }
            key="1"
          >
            <p>{text}</p>
          </Panel>
        </Collapse>
      </Col>
      <Col span={6}>
        <Collapse
          defaultActiveKey={['1']}
          onChange={onChange}
          bordered={false}
        >
          <Panel
            header={
              <div>
                <Icon icon="alert-info" />
                <span className="title">This is panel header 1</span>
              </div>
            }
            key="1"
          >
            <p>{text}</p>
          </Panel>
          <Panel
            header={
              <div>
                <Icon icon="alert-info" />
                <span className="title">This is panel header 2</span>
              </div>
            }
            key="2"
          >
            <p>{text}</p>
          </Panel>
          <Panel
            header={
              <div>
                <Icon icon="alert-info" />
                <span className="title">This is panel header 3</span>
              </div>
            }
            key="3"
          >
            <p>{text}</p>
          </Panel>
        </Collapse>
      </Col>
    </Row>
  </div>
);

export const Primary = Template.bind({});
Primary.args = {};
