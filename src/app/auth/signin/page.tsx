'use client';

import type { FormProps } from 'antd';
import { Button, Form, Input } from 'antd';

import { FormField } from '@/models/Common';

const FormConfig: FormProps = {
  name: 'form-signup',
  layout: 'vertical',
  scrollToFirstError: true,
};

const Items: FormField[] = [
  {
    key: 1,
    config: {
      name: 'email',
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
    field: <Input placeholder='Email' prefix='' />,
  },
  {
    key: 2,
    config: {
      name: 'password',
      rules: [
        { required: true, message: 'Please input your Password!' }
      ],
    },
    field: <Input.Password placeholder='Password' />,
  }
];

const SignInPage = () => {
  const [form] = Form.useForm();

  // const onFinish: FormProps['onFinish'] = (values) => {
  // console.log('Success:', values);
  // };

  return (
    <Form
      {...FormConfig}
      form={form}
      className='auth-form'
      // onFinish={onFinish}
    >
      {
        Items.map(({ key, config, field }) => (
          <Form.Item key={key} {...config} >
            {field}
          </Form.Item>
        ))
      }

      <div className='btn-form mt-4'>
        <Button type="primary" htmlType="submit">
          Join
        </Button>
      </div>
    </Form>
  );
};

export default SignInPage;
