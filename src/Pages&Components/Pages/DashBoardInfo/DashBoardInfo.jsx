import { Card, CardBody, CardFooter } from '@material-tailwind/react';
import React from 'react';
import { CiAlarmOff, CiAlarmOn, CiMemoPad } from 'react-icons/ci';

const DashBoardInfo = () => {
  return (
    <div className="py-20">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-2 lg:gap-2 lg:px-10 ">
        <Card className="w-full relative shadow-md border-2 border-gray-50 mx-auto">
          <div className="absolute -top-7 left-5 min-w-16 bg-primary shadow-lg shadow-primary p-4 rounded-2xl">
            <span className="font-bold text-3xl text-white">
              <CiMemoPad />
            </span>
          </div>
          <CardBody className="text-right">
            <p className="text-2xl pt-4 font-bold text-gray-900">Total Users</p>
            <p className="text-xl font-semibold text-blue-500">
              {/* {taskInfo?.data ? taskInfo?.data.length : "00"} */}
            </p>
          </CardBody>
          <CardFooter divider className="text-right flex justify-end  py-3">
            <p className="">
              {' '}
              <span className="text-green-800 font-bold">+50%</span> than last
              week
            </p>
          </CardFooter>
        </Card>
        <Card className="w-full relative shadow-md border-2 border-gray-50 mx-auto">
          <div className="absolute -top-7 left-5 min-w-16 bg-primary shadow-lg shadow-primary  p-4 rounded-2xl">
            <span className=" font-extrabold text-3xl text-white">
              <CiAlarmOn />
            </span>
          </div>
          <CardBody className="text-right">
            <p className="text-2xl pt-4 font-bold text-gray-900">
              Total Restaurant
            </p>
            <p className="text-xl font-semibold text-pink-500">
              {/* {taskInfo?.data
                  ? taskInfo?.data.filter((t) => t.status === "started").length
                  : "00"} */}
            </p>
          </CardBody>
          <CardFooter divider className="text-right flex justify-end  py-3">
            <p className="">
              {' '}
              <span className="text-green-800 font-bold">+50%</span> than last
              week
            </p>
          </CardFooter>
        </Card>
        <Card className="w-full relative shadow-md border-2 border-gray-50 mx-auto">
          <div className="absolute -top-7 left-5 min-w-16 bg-primary  shadow-lg shadow-primary  p-4 rounded-2xl">
            <span className="font-bold text-3xl text-white">
              <CiAlarmOff />
            </span>
          </div>
          <CardBody className="text-right">
            <p className="text-2xl pt-4 font-bold text-gray-900">
              Total Delivery Man
            </p>
            <p className="text-xl font-semibold text-orange-500">
              {/* {taskInfo?.data
                  ? taskInfo?.data.filter((t) => t.status === "completed").length
                  : "00"} */}
            </p>
          </CardBody>
          <CardFooter divider className="text-right flex justify-end  py-3">
            <p className="">
              {' '}
              <span className="text-green-800 font-bold">+50%</span> than last
              week
            </p>
          </CardFooter>
        </Card>
      </div>

      {/* <div className="grid grid-cols-1 lg:grid-cols-3 gap-2 lg:px-10 mt-20">
        <ChartCard color={'blue'} data={'New Task Added This Week'} />
        <ChartCard color={'pink'} data={'Task Completed This Week'} />
        <ChartCard color={'orange'} data={'Task Abandoned This Week'} />
      </div> */}
    </div>
  );
};

export default DashBoardInfo;
