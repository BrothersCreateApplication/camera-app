import React, { useEffect, useState } from 'react';
import Modal from 'react-modal';
import { useForm } from 'react-hook-form';
import { HiEye, HiEyeOff } from 'react-icons/hi';

const EditCameraModal = ({ isOpen, onClose, onSubmit, camera }) => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  useEffect(() => {
    Modal.setAppElement('#root');
    return () => {
      Modal.setAppElement(null);
    };
  }, []);

  const { register, handleSubmit, setValue, reset } = useForm();

  useEffect(() => {
    if (camera) {
      Object.entries(camera).forEach(([key, value]) => {
        setValue(key, value);
      });
    }
  }, [camera, setValue]);

  const onFormSubmit = (data) => {
    console.log(data);
    onSubmit(data);
    onClose();
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      className="absolute top-0 left-0 flex items-center justify-center w-full h-full overflow-auto"
    >
      <div className="modal-overlay fixed top-0 left-0 w-full h-full bg-gray-900 opacity-50 pointer-events-none"></div>
      <div className="w-[700px] bg-white rounded-lg shadow-lg p-6 z-10">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold">Thêm mới Camera</h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700 focus:outline-none"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
        <form onSubmit={handleSubmit(onFormSubmit)} className="p-10">
          <div className="flex justify-between mb-4">
            <label htmlFor="name" className="block font-semibold mb-1">
              Tên gợi nhớ:
            </label>
            <input
              type="text"
              name="name"
              id="name"
              className="w-2/3 border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-blue-500"
              {...register('name')}
            />
          </div>
          <div className="flex justify-between mb-4">
            <label htmlFor="model_type" className="block font-semibold mb-1">
              Dòng Sản Phẩm:
            </label>
            <input
              type="text"
              name="model_type"
              id="type"
              className="w-2/3 border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-blue-500"
              {...register('model_type')}
            />
          </div>
          <div className="flex justify-between mb-4">
            <label htmlFor="ip" className="block font-semibold mb-1">
              Địa chỉ IP:
            </label>
            <input
              type="text"
              name="ip_address"
              id="ip"
              className="w-2/3 border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-blue-500"
              {...register('ip_address')}
            />
          </div>
          <div className="flex justify-between mb-4">
            <label htmlFor="username" className="block font-semibold mb-1">
              Username:
            </label>
            <input
              type="text"
              name="username"
              id="username"
              className="w-2/3 border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-blue-500"
              {...register('username')}
            />
          </div>
          <div className="flex justify-between mb-4">
            <label htmlFor="password" className="block font-semibold mb-1">
              Mật khẩu:
            </label>
            <div className="relative w-2/3">
              <input
                type={showPassword ? 'text' : 'password'}
                name="password"
                id="password"
                autoComplete="current-password"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-blue-500"
                {...register('password')}
              />
              <div
                className="absolute inset-y-0 right-0 flex items-center pr-3 cursor-pointer"
                onClick={togglePasswordVisibility}
              >
                {showPassword ? <HiEyeOff /> : <HiEye />}
              </div>
            </div>
          </div>

          <div className="flex justify-between mb-4">
            <label htmlFor="rtsp_link" className="block font-semibold mb-1">
              RTSP Link:
            </label>
            <textarea
              name="rtsp_link"
              id="rtsp_link"
              className="w-2/3 border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-blue-500"
              rows="3"
              {...register('rtsp_link')}
            ></textarea>
          </div>
          <button
            type="submit"
            className="mt-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Lưu
          </button>
          <button
            type="button"
            onClick={() => {
              reset();
              onClose();
            }}
            className="py-[6px] px-4 border-solid border-2 rounded-md ml-4 box-border font-semibold"
          >
            Thoát
          </button>
        </form>
      </div>
    </Modal>
  );
};

export default EditCameraModal;
