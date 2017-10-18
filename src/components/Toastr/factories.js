let id = 0;

const defaultOptions = {
  color: '#6796e6',
};

export default function createToastr(options) {
  id += 1;
  return {
    ...defaultOptions,
    ...options,
    id,
  };
}
