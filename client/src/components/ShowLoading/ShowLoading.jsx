import React from 'react';
import ShowBox from '../ShowBox/ShowBox';

export default function ShowLoading({ message = "Loading" }) {
  return (
    <ShowBox
      type = {"LOADING"}
      message = {message}
    />
  );
}