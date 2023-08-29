import {TbSquareRoot} from "react-icons/tb";

export const buttons = [
    { label: '(', bg: 'gray', type: 'operator', value: '(' },
    { label: ')', bg: 'gray', type: 'operator', value: ')' },
    { label: '%', bg: 'gray', type: 'operator', value: '%' },
    { label: 'C', bg: 'rgb(171, 167, 167)', type: 'clear', value: 'C' },
    { label: '7', bg: 'gray', type: 'number', value: '7' },
    { label: '8', bg: 'gray', type: 'number', value: '8' },
    { label: '9', bg: 'gray', type: 'number', value: '9' },
    { label: <TbSquareRoot />, bg: 'rgb(171, 167, 167)', type: 'operator', value: 'sqrt' },
    { label: '4', bg: 'gray', type: 'number', value: '4' },
    { label: '5', bg: 'gray', type: 'number', value: '5' },
    { label: '6', bg: 'gray', type: 'number', value: '6' },
    { label: '-', bg: 'rgb(171, 167, 167)', type: 'operator', value: '-' },
    { label: '1', bg: 'gray', type: 'number', value: '1' },
    { label: '2', bg: 'gray', type: 'number', value: '2' },
    { label: '3', bg: 'gray', type: 'number', value: '3' },
    { label: '*', bg: 'rgb(171, 167, 167)', type: 'operator', value: '*' },
    { label: '0', bg: 'gray', type: 'number', value: '0' },
    { label: '=', bg: 'gray', type: 'equal', value: '=' },
    { label: '/', bg: 'gray', type: 'operator', value: '/' },
    { label: '+', bg: 'rgb(171, 167, 167)', type: 'operator', value: '+' },
  ];