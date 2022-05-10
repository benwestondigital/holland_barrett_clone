import Link from 'next/link';

const HeaderLogo = () => {
  return (
    <div>
      <Link href='/' data-test='logo'>
        {/* Large Logo */}
        <svg
          width='307'
          height='34'
          viewBox='0 0 1229 135'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
          className='cursor-pointer pl-2 hidden lg:flex'
        >
          <path
            d='M89.56 6.075H78.84a3.327 3.327 0 0 0-2.325.951c-.306.302-.548.66-.713 1.054a3.21 3.21 0 0 0-.25 1.242v48.29H17.297V9.322a3.211 3.211 0 0 0-.963-2.296 3.326 3.326 0 0 0-2.326-.951H3.289c-.872 0-1.709.342-2.325.951A3.226 3.226 0 0 0 0 9.322v114.933c0 .861.347 1.687.964 2.296a3.311 3.311 0 0 0 2.326.951h10.719c.872 0 1.709-.342 2.326-.951a3.226 3.226 0 0 0 .963-2.296V74.378h58.253v49.913a3.21 3.21 0 0 0 .964 2.296 3.312 3.312 0 0 0 2.326.952H89.56c.872 0 1.71-.343 2.326-.952a3.223 3.223 0 0 0 .964-2.296V9.359c0-.861-.347-1.687-.964-2.296a3.311 3.311 0 0 0-2.326-.951M153.117 112.634c-13.584 0-27.315-10.326-27.315-30.065 0-19.74 13.731-30.083 27.315-30.083 13.583 0 27.149 10.326 27.149 30.083 0 19.757-13.658 30.065-27.149 30.065Zm0-76.914c-25.449 0-44.614 20.068-44.614 46.849 0 26.781 19.165 46.684 44.614 46.684 25.448 0 44.447-20.067 44.447-46.684 0-26.617-19.109-46.849-44.447-46.849ZM227.079 6.075h-10.72c-.872 0-1.709.342-2.326.951a3.225 3.225 0 0 0-.963 2.296v114.933c0 .861.346 1.687.963 2.296a3.312 3.312 0 0 0 2.326.951h10.72c.872 0 1.709-.342 2.326-.951a3.225 3.225 0 0 0 .963-2.296V9.322c0-.86-.346-1.687-.963-2.296a3.312 3.312 0 0 0-2.326-.95M265.889 6.075h-10.738a3.311 3.311 0 0 0-2.314.958 3.226 3.226 0 0 0-.957 2.29v114.932c0 .858.344 1.681.957 2.29a3.314 3.314 0 0 0 2.314.957h10.738a3.31 3.31 0 0 0 2.326-.951 3.226 3.226 0 0 0 .964-2.296V9.322c0-.86-.347-1.687-.964-2.296a3.31 3.31 0 0 0-2.326-.95M431.906 35.72c-9.121.102-17.836 3.738-24.266 10.125l-.61-5.363a3.232 3.232 0 0 0-1.066-2.063 3.313 3.313 0 0 0-2.187-.838h-8.279a3.31 3.31 0 0 0-2.326.951 3.226 3.226 0 0 0-.964 2.296v83.463c0 .862.347 1.687.964 2.296a3.311 3.311 0 0 0 2.326.952h10.719c.872 0 1.709-.343 2.326-.952a3.225 3.225 0 0 0 .964-2.296v-51.08a19.828 19.828 0 0 1 1.463-7.852 20.058 20.058 0 0 1 4.449-6.667 20.348 20.348 0 0 1 6.73-4.427 20.562 20.562 0 0 1 7.946-1.487c12.789 0 19.017 6.987 19.017 21.363v50.15c0 .862.346 1.687.963 2.296a3.313 3.313 0 0 0 2.326.952h10.719c.873 0 1.71-.343 2.327-.952a3.224 3.224 0 0 0 .963-2.296V69.324c0-19.775-14.212-33.604-34.578-33.604M524.497 112.634c-15.1 0-26.04-12.643-26.04-30.065 0-17.714 10.7-30.083 26.04-30.083 15.006 0 25.873 12.588 25.873 29.919 0 17.33-10.885 30.229-25.873 30.229ZM564.083 6.075h-10.719c-.872 0-1.709.342-2.326.951a3.225 3.225 0 0 0-.963 2.296V45.81c-7.332-6.595-16.917-10.211-26.835-10.125-20.329 0-42.1 16.419-42.1 46.849-.282 12.507 4.294 24.647 12.789 33.932a40.651 40.651 0 0 0 13.327 9.355 41.117 41.117 0 0 0 15.984 3.415 39.482 39.482 0 0 0 15.369-2.939 39.055 39.055 0 0 0 12.963-8.664l.72 6.969a3.254 3.254 0 0 0 1.071 2.076 3.329 3.329 0 0 0 2.2.843h8.52a3.31 3.31 0 0 0 2.32-.944 3.23 3.23 0 0 0 .97-2.285V9.359c0-.861-.347-1.687-.964-2.296a3.309 3.309 0 0 0-2.326-.951M1016.87 36.158c-2-.342-4.04-.489-6.08-.438a28.179 28.179 0 0 0-12.535 3.078 27.785 27.785 0 0 0-9.788 8.324l-.739-6.549a3.193 3.193 0 0 0-1.077-2.073 3.276 3.276 0 0 0-2.213-.81h-8.187c-.872 0-1.709.343-2.326.952a3.227 3.227 0 0 0-.964 2.296v83.353c0 .862.347 1.688.964 2.296a3.313 3.313 0 0 0 2.326.952h10.645c.873 0 1.709-.343 2.326-.952a3.223 3.223 0 0 0 .964-2.296V73.648c-.166-12.551 7.947-21.162 20.534-21.162 1.67 0 3.34.14 4.99.42 2.44.4 3.84-.657 3.82-3.211V39.333c0-1.697-.31-2.7-2.73-3.175M959.784 36.158a31.81 31.81 0 0 0-6.098-.438 28.18 28.18 0 0 0-12.487 3.098 27.782 27.782 0 0 0-9.746 8.304l-.74-6.549a3.196 3.196 0 0 0-1.103-2.099 3.278 3.278 0 0 0-2.26-.783h-8.206c-.872 0-1.709.342-2.326.95a3.226 3.226 0 0 0-.964 2.297v83.353c0 .861.347 1.687.964 2.296a3.313 3.313 0 0 0 2.326.952h10.738c.872 0 1.709-.343 2.326-.952a3.225 3.225 0 0 0 .963-2.296V73.648c-.184-12.551 7.947-21.162 20.515-21.162 1.672 0 3.341.14 4.989.42 2.44.4 3.845-.657 3.826-3.211V39.332c0-1.696-.314-2.7-2.717-3.174ZM1038.35 73.867c2.92-12.77 12.84-21.527 25.13-21.527 9.59 0 19.94 5.728 21.59 21.527h-46.72Zm25.28-38.147c-26.83 0-43.47 21.09-43.47 47.305 0 28.35 17.3 46.228 44.6 46.228 11.07.325 22-2.575 31.42-8.337.41-.289.74-.676.96-1.126.22-.45.32-.947.29-1.446v-13.391c.06-.423-.03-.853-.24-1.226a2.035 2.035 0 0 0-2.19-.984c-.42.087-.81.306-1.1.623a46.6 46.6 0 0 1-27.72 9.359c-16.19 0-25.49-8.629-28.04-22.767h60.62c.84.007 1.65-.3 2.27-.859a3.3 3.3 0 0 0 1.06-2.152c.17-1.824.33-3.758.33-5.91 0-22.53-11.99-45.28-38.81-45.28M1160.29 112.378a44.37 44.37 0 0 1-7.19.73c-10.57 0-15.95-5.564-15.95-16.528v-43h21.47c.44 0 .86-.084 1.26-.247.4-.163.76-.402 1.07-.704.31-.301.55-.66.71-1.053.17-.394.25-.816.25-1.243v-9.505a3.205 3.205 0 0 0-1-2.225 3.299 3.299 0 0 0-2.29-.912h-21.47V18.59c0-.427-.09-.849-.25-1.243a3.266 3.266 0 0 0-.72-1.053c-.3-.302-.66-.541-1.06-.704-.4-.163-.83-.247-1.26-.247h-10.2c-.43 0-.86.084-1.26.247a3.238 3.238 0 0 0-2.03 3v19.1h-10.11a3.3 3.3 0 0 0-2.32.945 3.192 3.192 0 0 0-.97 2.285v9.504c0 .862.35 1.688.96 2.297a3.33 3.33 0 0 0 2.33.95h9.65V96.89c0 19.648 12.54 32.363 31.99 32.363 3.23.072 6.47-.209 9.64-.839a3.194 3.194 0 0 0 1.88-1.113c.47-.577.72-1.3.71-2.043v-9.687c0-2.664-1.02-3.649-3.84-3.193M1224.19 112.378c-2.37.439-4.77.683-7.18.73-10.58 0-15.95-5.564-15.95-16.528v-43h21.47c.43 0 .86-.084 1.26-.247a3.238 3.238 0 0 0 2.03-3v-9.505a3.248 3.248 0 0 0-1-2.225 3.299 3.299 0 0 0-2.29-.912h-21.47V18.59c0-.427-.09-.849-.25-1.243a3.266 3.266 0 0 0-.72-1.053c-.3-.302-.67-.541-1.06-.704-.4-.163-.83-.247-1.26-.247h-10.26c-.43 0-.86.084-1.26.247-.4.163-.76.402-1.07.704-.3.301-.54.66-.71 1.053-.16.394-.25.816-.25 1.243v19.1h-10.11c-.87 0-1.7.34-2.32.945a3.233 3.233 0 0 0-.97 2.285v9.504c0 .862.35 1.688.96 2.297a3.33 3.33 0 0 0 2.33.95h9.65V96.89c0 19.648 12.55 32.363 31.99 32.363 3.23.073 6.46-.208 9.63-.839a3.157 3.157 0 0 0 1.91-1.094c.49-.579.75-1.311.73-2.062v-9.687c0-2.664-1-3.649-3.83-3.193ZM759.577 110.664h-31.972V74.268h32.009c12.789 0 19.369 8.83 19.369 18.243 0 9.414-6.469 18.335-19.406 18.153Zm-31.972-87.568h28.812c12.05 0 17.576 8.21 17.576 16.802 0 8.593-5.36 17.094-17.594 17.04h-28.72l-.074-33.842Zm52.376 41.303c8.224-5.473 12.604-16.42 12.604-25.377 0-19.611-13.954-32.837-34.708-32.837h-45.685c-.698 0-1.367.272-1.863.757a2.593 2.593 0 0 0-.78 1.833v116.173c.005.689.285 1.348.78 1.833a2.665 2.665 0 0 0 1.863.758h46.813c25.651 0 38.662-14.595 38.662-34.954 0-15.726-8.852-24.775-17.612-28.296'
            fill='#fff'
          ></path>
          <path
            d='M682.954 65.457a19.842 19.842 0 0 0-7.669-3.649 21.046 21.046 0 0 0 6.209-3.138 22.25 22.25 0 0 0 5.545-5.746 26.607 26.607 0 0 0 3.16-7.298 28.345 28.345 0 0 0 1.201-7.79 21.522 21.522 0 0 0-1.312-7.297 14.07 14.07 0 0 0-4.435-6.184 10.526 10.526 0 0 0-6.968-2.5 9.305 9.305 0 0 0-6.283 2.463 8.397 8.397 0 0 0-2.064 2.746 8.299 8.299 0 0 0-.782 3.33 10.266 10.266 0 0 0 2.162 6.767 8.372 8.372 0 0 0 2.979 2.018 8.47 8.47 0 0 0 3.563.591 7.866 7.866 0 0 0 5.064-1.642c.36-.331.809-.553 1.294-.638 1.016 0 1.164 1.113 1.164 1.824a7.93 7.93 0 0 1-1.12 3.919 8.067 8.067 0 0 1-2.927 2.868 25.543 25.543 0 0 1-7.725 3.448c-1.849.492-3.697.875-5.545 1.258l-2.938.602c-1.849.402-3.604.95-5.341 1.46-1.405.42-2.828.82-4.233 1.204a36.246 36.246 0 0 0-5.729 1.824 20.89 20.89 0 0 0-6.672 4.47 10.253 10.253 0 0 0-2.827 7.297c0 2.937.758 4.415 2.088 4.415 1.331 0 2.329-1.076 3.382-2.153a12.628 12.628 0 0 1 4.24-2.762 12.752 12.752 0 0 1 5.001-.886c2.902-.05 5.753.756 8.187 2.317a14.632 14.632 0 0 1 5.36 6.64 19.871 19.871 0 0 1 1.977 8.228 29.18 29.18 0 0 1-1.349 8.136 37.194 37.194 0 0 1-3.068 7.68 56.577 56.577 0 0 1-4.38 7.079c-1.552 2.098-3.567 4.214-5.544 6.312a150.472 150.472 0 0 1-5.914 5.911c-1.996 1.897-3.863 3.503-6.155 5.345a12.77 12.77 0 0 1-5.969 2.919 12.122 12.122 0 0 1-6.117-2.937c-2.255-1.824-3.974-3.357-6.136-5.363-2.162-2.007-3.696-3.758-5.544-5.583l-1.664-2.08c-1.515-1.587-2.957-3.083-4.176-4.633a58.758 58.758 0 0 1-4.713-6.987 38.662 38.662 0 0 1-3.438-7.626 26.285 26.285 0 0 1-1.386-8.191c-.012-2.84.586-5.651 1.756-8.246a14.646 14.646 0 0 1 5.544-6.495 14.41 14.41 0 0 1 8.077-2.17 15.556 15.556 0 0 1 5.895.893 11.873 11.873 0 0 1 4.953 3.247c.273.42.64.774 1.072 1.033.433.26.919.418 1.423.463 1.368 0 2.403-1.623 2.403-3.959 0-4.05-2.754-7.443-5.378-10.216-1.479-1.587-3.124-3.174-4.861-4.834-.887-.858-1.848-1.715-2.68-2.609a27.916 27.916 0 0 1-5.858-7.59 28.323 28.323 0 0 1-1.848-6.001 28.218 28.218 0 0 1-.74-6.221 29.365 29.365 0 0 1 1.239-8.501 24.046 24.046 0 0 1 3.825-7.425 20.597 20.597 0 0 1 6.284-5.473 16.669 16.669 0 0 1 8.058-2.135 23.602 23.602 0 0 1 8.353 1.204 14.337 14.337 0 0 1 6.635 5.127 14.35 14.35 0 0 1 2.181 8.227c0 3.649-2.292 7.827-5.231 7.827-2.088 0-3.012-3.084-4.084-4.342a6.579 6.579 0 0 0-2.488-1.822 6.654 6.654 0 0 0-3.056-.495 7.718 7.718 0 0 0-3.589.842 7.605 7.605 0 0 0-2.769 2.405 10.848 10.848 0 0 0-2.181 7.006c-.045 1.604.262 3.2.9 4.677a11.13 11.13 0 0 0 2.797 3.879 12.241 12.241 0 0 0 4.121 2.513c1.53.557 3.157.807 4.787.734a20.229 20.229 0 0 0 8.534-1.36 20.007 20.007 0 0 0 7.156-4.788 20.315 20.315 0 0 0 4.417-7.188 21.652 21.652 0 0 0 1.627-8.045c.064-2.75-.4-5.485-1.368-8.064a18.232 18.232 0 0 0-4.546-6.823 22.675 22.675 0 0 0-7.171-4.47 33.112 33.112 0 0 0-7.929-2.28 54.416 54.416 0 0 0-8.335-.766 48.67 48.67 0 0 0-8.409.949 39.401 39.401 0 0 0-8.168 2.17 33.391 33.391 0 0 0-7.393 4.087 29.75 29.75 0 0 0-6.025 5.93 27.14 27.14 0 0 0-5.415 15.944 25.555 25.555 0 0 0 1.553 8.72 24.254 24.254 0 0 0 4.565 7.571 37.203 37.203 0 0 0 6.431 6.111 75.095 75.095 0 0 0 6.542 4.123 33.183 33.183 0 0 0-6.616 0 30.39 30.39 0 0 0-7.596 1.734 28.614 28.614 0 0 0-6.782 3.794 26.562 26.562 0 0 0-5.545 5.473 24.167 24.167 0 0 0-3.363 6.896 24.385 24.385 0 0 0-1.405 7.535c.017 2.643.346 5.276.98 7.844a39.952 39.952 0 0 0 2.606 7.48 52.322 52.322 0 0 0 4.029 6.805 62.337 62.337 0 0 0 4.62 6.439 61.482 61.482 0 0 0 4.953 4.853c2.088 1.916 4.602 4.05 6.856 5.747a84.993 84.993 0 0 0 7.042 4.78 68.125 68.125 0 0 0 6.505 3.648c2.624 1.186 5.341 2.025 7.559 2.791a25.283 25.283 0 0 0 7.928 1.496 29.314 29.314 0 0 0 7.855-1.441 52.398 52.398 0 0 0 7.392-2.919 64.134 64.134 0 0 0 6.875-3.849 69.969 69.969 0 0 0 6.487-4.433 73.92 73.92 0 0 0 6.099-4.962 80.411 80.411 0 0 0 5.655-6.349 56.96 56.96 0 0 0 4.38-5.692 49.575 49.575 0 0 0 3.493-7.005 41.237 41.237 0 0 0 2.68-7.298 34.6 34.6 0 0 0 .702-7.79 23.916 23.916 0 0 0-1.848-9.267 18.805 18.805 0 0 0-5.692-7.553'
            fill='#93C90E'
          ></path>
          <path
            d='M851.595 112.634c-15.099 0-26.058-12.643-26.058-30.065 0-17.714 10.719-30.083 26.058-30.083 14.989 0 25.874 12.588 25.874 29.919 0 17.33-10.904 30.229-25.874 30.229Zm39.587-74.943h-9.499a3.296 3.296 0 0 0-2.203.826 3.21 3.21 0 0 0-1.068 2.074l-.555 5.966c-7.346-7.049-17.218-10.944-27.463-10.837-20.329 0-42.082 16.42-42.082 46.849 0 24.72 16.985 46.684 42.082 46.684 10.237.106 20.104-3.774 27.463-10.8l.647 6.167a3.23 3.23 0 0 0 1.067 2.08c.604.539 1.39.838 2.204.839h9.5a3.314 3.314 0 0 0 2.278-.977 3.227 3.227 0 0 0 .937-2.271V40.847a3.229 3.229 0 0 0-1.002-2.244 3.312 3.312 0 0 0-2.306-.912M328.004 112.634c-15.099 0-26.04-12.643-26.04-30.065 0-17.714 10.701-30.083 26.04-30.083 15.007 0 25.874 12.588 25.874 29.919 0 17.33-10.885 30.229-25.874 30.229Zm39.587-74.943h-9.499a3.315 3.315 0 0 0-2.16.803 3.239 3.239 0 0 0-1.093 2.006l-.628 6.057c-7.342-7.044-17.207-10.94-27.445-10.837-20.329 0-42.1 16.42-42.1 46.849 0 24.72 16.984 46.684 42.1 46.684 10.227.108 20.083-3.773 27.426-10.8l.647 6.167a3.254 3.254 0 0 0 1.071 2.076 3.34 3.34 0 0 0 2.2.843h9.5c.872 0 1.709-.343 2.326-.952a3.225 3.225 0 0 0 .963-2.296V40.847a3.229 3.229 0 0 0-1.002-2.244 3.312 3.312 0 0 0-2.306-.912'
            fill='#fff'
          ></path>
        </svg>
      </Link>
      {/* Small Logo */}
      <Link href='/'>
        <svg
          width='85'
          height='36'
          viewBox='0 0 338 141'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
          className='cursor-pointer pl-2 flex lg:hidden'
        >
          <path
            d='M218.098 68.3c-2.326-1.81-5.168-3.362-8.011-3.88 2.326-.776 4.652-1.81 6.46-3.363 2.326-1.811 4.393-3.88 5.685-6.21 1.292-2.069 2.326-4.398 3.36-7.76.775-2.847 1.292-5.693 1.292-8.28 0-2.587-.517-5.174-1.292-7.761-.775-2.587-2.326-4.657-4.652-6.468-2.067-1.811-4.393-2.587-7.235-2.587-2.326 0-4.91 1.035-6.46 2.587-2.068 1.811-3.101 4.14-3.101 6.468 0 2.846.775 5.433 2.325 7.244 1.551 1.81 3.877 2.846 6.977 2.846 2.843 0 4.393-1.035 5.427-1.811.517-.259 1.034-.776 1.292-.776 1.034 0 1.292 1.293 1.292 1.81 0 2.846-1.292 5.175-4.134 7.245-2.843 1.552-5.427 2.846-8.528 3.622-1.809.517-3.876 1.035-5.685 1.293l-3.101.776c-1.809.518-3.876 1.035-5.685 1.553-1.55.517-2.842.776-4.393 1.293-2.067.518-4.134 1.035-5.943 2.07-3.101 1.294-5.427 2.846-6.977 4.657-1.809 2.07-2.843 4.657-2.843 7.761 0 3.105.775 4.657 2.067 4.657 1.293 0 2.326-1.035 3.618-2.328 2.584-2.587 5.944-3.88 9.82-3.88 3.359 0 5.943.775 8.527 2.328 2.326 1.552 4.135 3.88 5.685 6.985 1.292 3.104 2.068 5.95 2.068 8.796 0 2.587-.517 5.175-1.292 8.538-.776 3.104-1.809 5.692-3.101 8.279-1.034 1.811-2.584 4.657-4.652 7.502-1.55 2.329-3.617 4.399-5.685 6.727-1.809 2.07-4.134 4.139-6.202 6.209-2.067 2.07-4.134 3.622-6.46 5.692-2.067 1.811-4.91 3.105-6.202 3.105-1.55 0-3.876-1.035-6.46-3.105-2.326-1.811-4.134-3.622-6.46-5.692-2.067-2.07-3.876-3.881-5.685-5.95-.775-.776-1.292-1.553-2.067-2.07-1.551-1.552-3.101-3.363-4.393-4.916a53.613 53.613 0 0 1-4.91-7.502c-1.551-2.587-2.584-5.175-3.618-8.02-1.55-2.846-1.809-5.692-1.809-8.538 0-3.105.517-5.95 1.809-8.796 1.292-3.105 3.359-5.175 5.685-6.986 2.326-1.552 5.168-2.328 8.528-2.328 2.584 0 4.393.258 6.201 1.035 1.551.517 3.618 1.552 5.169 3.363.775 1.035 1.55 1.552 2.584 1.552 1.55 0 2.584-1.81 2.584-4.14 0-4.397-2.843-8.02-5.685-10.865l-5.168-5.175c-1.034-.776-1.809-1.81-2.843-2.846-3.101-3.104-4.91-5.432-6.202-8.02-1.033-2.07-1.55-4.14-2.067-6.468-.517-2.328-.775-4.398-.775-6.726 0-3.105.517-6.21 1.292-9.055 1.033-2.846 2.325-5.692 3.876-7.762 1.809-2.587 4.135-4.398 6.46-5.95 2.584-1.552 5.427-2.329 8.528-2.329 2.584 0 5.943.26 8.786 1.294 2.842 1.035 5.426 3.105 6.977 5.433 1.55 2.07 2.325 5.174 2.325 8.796 0 3.881-2.325 8.28-5.426 8.28-2.067 0-3.101-3.364-4.393-4.658-1.292-1.552-2.843-2.587-5.944-2.587-2.842 0-4.651 1.035-6.718 3.364-1.551 1.81-2.326 4.398-2.326 7.502 0 3.881 1.292 6.727 3.876 9.055 2.584 2.329 5.427 3.622 9.303 3.622 3.876 0 6.46-.517 8.786-1.293 2.842-1.294 5.427-2.846 7.494-5.175 1.809-1.81 3.359-4.398 4.651-7.761 1.034-2.846 1.809-5.692 1.809-8.538 0-3.622-.517-6.209-1.292-8.537-1.034-2.846-2.584-5.175-4.651-7.244-1.809-1.553-4.135-3.364-7.494-4.657-2.326-1.035-4.91-1.811-8.269-2.329-2.584-.517-5.685-.776-8.786-.776s-5.944.518-8.786 1.035c-3.618.518-6.202 1.294-8.528 2.329-2.842 1.293-5.426 2.587-7.752 4.398-2.584 1.81-4.651 3.88-6.202 6.209-1.809 2.328-3.101 4.916-4.134 8.02-1.034 3.105-1.551 6.21-1.551 9.055 0 3.105.517 6.21 1.551 9.314 1.033 2.587 2.584 5.174 4.651 8.02 2.067 2.587 4.393 4.657 6.719 6.468 2.067 1.552 4.393 3.105 6.718 4.398-2.325-.259-4.91-.259-6.977 0-3.101.259-5.685 1.035-8.011 1.811-2.325 1.035-4.651 2.329-6.977 4.14-2.325 1.552-4.134 3.622-5.685 5.691-1.292 1.811-2.584 4.14-3.617 7.244 0 2.329-.776 5.175-.776 8.28 0 2.586.259 5.432 1.034 8.278.517 2.587 1.55 5.433 2.843 8.02 1.033 2.329 2.584 4.657 4.134 7.244 1.551 2.329 3.101 4.657 4.91 6.727a48.737 48.737 0 0 0 5.168 5.174c2.067 2.07 4.91 4.398 7.236 6.209 2.325 1.812 4.909 3.623 7.493 5.175 2.326 1.293 4.652 2.846 6.719 3.881 2.843 1.293 5.685 2.069 8.011 2.845 2.842 1.035 5.685 1.553 8.269 1.553 2.842 0 5.427-.776 8.269-1.553a48.503 48.503 0 0 0 7.752-3.104c2.326-1.035 4.652-2.587 7.236-4.14 2.584-1.552 4.651-3.104 6.718-4.657 2.068-1.552 4.393-3.363 6.461-5.174a73.804 73.804 0 0 0 5.943-6.726c1.551-1.811 3.359-3.881 4.652-5.951 1.55-2.328 2.584-4.915 3.617-7.503 1.034-2.328 2.068-4.915 2.843-7.761.775-2.846.775-5.692.775-8.279 0-3.363-.775-6.727-2.067-9.831-1.809-3.622-3.618-6.21-6.202-8.28Z'
            fill='#9BC437'
          ></path>
          <path
            d='M97.162 130.651V8.538c0-1.811-1.55-3.364-3.36-3.364h-11.11c-1.81 0-3.36 1.553-3.36 3.364v51.225H18.089V8.538c0-1.811-1.55-3.364-3.36-3.364H3.36C1.55 5.174 0 6.727 0 8.538V130.65c0 1.811 1.55 3.364 3.36 3.364h11.11c1.81 0 3.36-1.553 3.36-3.364V77.615h60.985v53.036c0 1.811 1.55 3.364 3.36 3.364h11.11c2.327.258 3.877-1.294 3.877-3.364ZM318.62 97.018c0 9.832-6.718 19.404-20.414 19.404h-33.593V77.615h33.593c13.437 0 20.414 9.313 20.414 19.403Zm-5.168-56.14c0 9.313-5.685 18.11-18.347 18.11H264.87V23.025h30.234c12.404 0 18.347 8.796 18.347 17.851Zm6.202 26.13c8.527-5.951 13.179-17.593 13.179-26.907 0-20.697-14.73-34.927-36.436-34.927H248.59c-1.55 0-2.842 1.294-2.842 2.846v123.408c0 1.552 1.292 2.845 2.842 2.845h49.098c26.875 0 40.57-15.523 40.57-37.255-.258-16.558-9.302-26.389-18.605-30.01Z'
            fill='#fff'
          ></path>
        </svg>
      </Link>
    </div>
  );
};
export default HeaderLogo;
