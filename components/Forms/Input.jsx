import classNames from 'classnames';
import { useField } from 'formik';
import { ExclamationCircleIcon } from '@heroicons/react/24/solid';

const Input = ({ type = '', label = '', className = '', required = true, ...props }) => {
  const [field, meta] = useField(props);
  const error = meta?.touched && meta?.error;

  return (
    <div className={classNames(className, 'flex flex-col space-y-1')}>
      {label && type !== "checkbox" ? (
        <label htmlFor="email" className={`text-gray-600 text-base`}>
          <span>{label}</span>
          <span className='text-red-500 ml-0.5'>{required ? "*" : null}</span>
        </label>
      ) : null}

      <div className="flex-1">
        {type === 'textarea' ? (
          <textarea
            {...field}
            {...props}
            className={classNames(
              'w-full shadow-sm rounded-md py-1.5 pl-4 truncate border focus:outline-none focus:ring-4 focus:ring-opacity-20 transition disabled:opacity-50 disabled:cursor-not-allowed',
              error
                ? 'border-red-400 text-red-800 focus:border-red-400 focus:ring-red-400'
                : 'border-gray-300 focus:border-gray-400 focus:ring-gray-400'
            )}
          />
        ) : type === 'select' ? (
          <select
            {...field}
            {...props}
            className={classNames(
              'w-full shadow-sm rounded-md py-1.5 pl-4 truncate border focus:outline-none focus:ring-4 focus:ring-opacity-20 transition disabled:opacity-50 disabled:cursor-not-allowed',
              error
                ? 'border-red-400 text-red-800 focus:border-red-400 focus:ring-red-400'
                : 'border-gray-300 focus:border-gray-400 focus:ring-gray-400'
            )}
          />
        ) : type === "checkbox" ? (
          <div className='flex items-center'>
            <input 
              {...field}
              {...props}
              className={classNames(
                'w-4 h-4 text-primary bg-gray-100 border-gray-300 rounded focus:ring-secondary focus:ring-2 disabled:opacity-50 disabled:cursor-not-allowed',
                error
                  ? 'border-red-400 text-red-800 focus:border-red-400 focus:ring-red-400'
                  : 'border-gray-300 focus:border-gray-400 focus:ring-gray-400'
              )}
            />
            <label htmlFor="link-checkbox" className="ml-2 text-sm font-medium text-gray-900">
              {label && label}
            </label>
          </div>
        ) : (
          <div className="relative">
            <input
              {...field}
              {...props}
              type={type}
              className={classNames(
                'w-full shadow-sm rounded-md py-1.5 pl-4 truncate border focus:outline-none focus:ring-4 focus:ring-opacity-20 transition disabled:opacity-50 disabled:cursor-not-allowed',
                error
                  ? 'border-red-400 text-red-800 focus:border-red-400 focus:ring-red-400'
                  : 'border-gray-300 focus:border-gray-400 focus:ring-gray-400'
              )}
            />
            {error && type !== 'number' ? (
              <span className="pr-2 absolute right-0 top-1/2 -translate-y-1/2">
                <ExclamationCircleIcon className="w-6 h-6 text-red-500" />
              </span>
            ) : null}
          </div>
        )}
      </div>

      {error ? (
        <p name="email" className="text-red-600 text-sm first-letter:uppercase">
          {error}
        </p>
      ) : null}
    </div>
  );
};

export default Input;