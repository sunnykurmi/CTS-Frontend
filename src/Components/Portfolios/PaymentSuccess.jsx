import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { asynccurrentUser } from "../../store/Actions/userActions";
import { paymentsuccess } from "../../store/Actions/paymentAction";

function PaymentSuccess() {
  const dispatch = useDispatch();

  const { id } = useParams();
  console.log(id);
  const { user } = useSelector((state) => state.user);

  useEffect(() => {
    dispatch(asynccurrentUser());
  }, [dispatch]);

  if (user) {
    dispatch(paymentsuccess(id, user));
  }

  return (
    <div>
      <div className="center h-screen w-full flex-col text-center">
        <p className="text-2xl font-medium"> 🎉 Your Payment is Successful 🎉</p>
        <p className=" text-xl ">Thank you for your payment </p>
        <p>Your </p>
        <p></p>
      </div>
    </div>
  );
}

export default PaymentSuccess;
