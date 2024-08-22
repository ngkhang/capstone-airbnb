'use client';

import type { FormProps } from 'antd';
import {
  Button,
  Checkbox,
  DatePicker,
  Form,
  Input,
  Select
} from 'antd';
import dayjs from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat';
import React from 'react';

import { FormField } from '@/models/Common';

dayjs.extend(customParseFormat);
const { Option } = Select;

const FormConfig: FormProps = {
  name: 'form-signin',
  layout: 'vertical',
  scrollToFirstError: true,
  initialValues: { prefix: '86' },
};

const prefixSelector = (
  <Form.Item name="prefix" noStyle>
    <Select style={{ width: 70 }}>
      <Option value="86">+86</Option>
      <Option value="87">+87</Option>
    </Select>
  </Form.Item>
);

const Items: FormField[] = [
  {
    key: 1,
    config: {
      name: 'name',
      label: 'Name',
      rules: [
        {
          required: true,
          message: 'Please input your Name!',
        }
      ],
    },
    field: <Input />,
  },
  {
    key: 2,
    config: {
      name: 'email',
      label: 'Email',
      rules: [
        {
          type: 'email',
          message: 'The input is not valid E-mail!',
        },
        {
          required: true,
          message: 'Please input your E-mail!',
        }
      ],
    },
    field: <Input />,
  },
  {
    key: 3,
    config: {
      name: 'password',
      label: 'Password',
      rules: [
        {
          required: true,
          message: 'Please input your password!',
        }
      ],
      hasFeedback: true,
    },
    field: <Input.Password />,
  },
  {
    key: 4,
    config: {
      name: 'confirm',
      label: 'Confirm Password',
      dependencies:['password'],
      rules: [
        {
          required: true,
          message: 'Please confirm your password!',
        },
        ({ getFieldValue }: { getFieldValue: any }) => {return {
          validator(_:any, value: any) {
            if (!value || getFieldValue('password') === value) {
              return Promise.resolve();
            }
            return Promise.reject(new Error('The new password that you entered do not match!'));
          },
        };}
      ],
      hasFeedback: true,
    },
    field: <Input.Password />,
  },
  {
    key: 5,
    config: {
      name: 'phone',
      label: 'Phone Number',
      rules:[{ required: true, message: 'Please input your phone number!' }],
    },
    field: <Input addonBefore={prefixSelector} style={{ width: '100%' }} />,
  },
  {
    key: 6,
    config: {
      name: 'gender',
      label: 'Gender',
      rules: [{ required: true, message: 'Please select gender!' }],
      className: 'md:col-span-1',
    },
    field: (
      <Select placeholder='Select your gender'>
        {
          [
            {
              key: 1,
              label: 'Male',
              value: true,
            },
            {
              key: 2,
              label: 'Female',
              value: false,
            }
          ].map((gender) => (
            <Option key={gender.key} value={gender.value} >
              {gender.label}
            </Option>
          ))
        }
      </Select>
    ),
  },
  {
    key: 7,
    config: {
      name: 'birthday',
      label: 'Birthday',
      className: 'md:col-span-1',
    },
    field: (
      <DatePicker
        className='w-full'
        defaultValue={dayjs('01/01/2018', 'DD/MM/YYYY')}
        format={{
          format: 'DD/MM/YYYY',
          type: 'mask',
        }} />
    ),
  }

];

const SignUpPage = () => {
  const [form] = Form.useForm();

  // const onFinish = (values: any) => {
  //   console.log('Received values of form: ', values);
  // };

  const onReset = () => {
    form.resetFields();
  };

  return (
    <Form
      {...FormConfig}
      form={form}
      className='auth-form'
      // onFinish={onFinish}
    >
      {
        Items.map(({ key, config, field }) => (
          <Form.Item key={key} {...config} className={config.className}>
            {field}
          </Form.Item>
        ))
      }

      <Form.Item
        name="agreement"
        valuePropName="checked"
        rules={[
          {
            validator: (_, value) =>
              value ? Promise.resolve() : Promise.reject(new Error('Should accept agreement')),
          }
        ]}
      >
        <Checkbox>
          I have read the <span className='cursor-pointer text-blue-500'>agreement</span>
        </Checkbox>
      </Form.Item>

      <div className='btn-form'>
        <Button className='btn-signup' htmlType="submit" type="primary">
          Submit
        </Button>
        <Button className='btn-signup bg-white text-gray-400' htmlType="button" onClick={onReset}>
          Reset
        </Button>
      </div>
    </Form>
  );
};

export default SignUpPage;
