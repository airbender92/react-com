/*
 * @Author: wangyunbo
 * @Date: 2022-01-18 14:08:05
 * @LastEditors: wangyunbo
 * @LastEditTime: 2022-01-18 14:09:33
 * @FilePath: \rollUp\examples\src\index.js
 * @Description: file content
 */
import React from 'react';
import { render } from 'react-dom'
import MyComponent from '../../src';

const App = () => (
  <MyComponent />
)

render(<App />, document.getElementById('root'))