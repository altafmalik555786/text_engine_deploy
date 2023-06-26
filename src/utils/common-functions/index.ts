import { notification } from "@utils/notifications";
import { constRoute } from "@utils/route";
import { resetStore } from "@stores/root-store";
import { JWT_AUTH_ACCESS_TOKEN } from "@utils/constants/important";

export const addDebounce = (fn, delay) => {
  let timer;
  return (() => {
    clearTimeout(timer);
    timer = setTimeout(() => fn(), delay);
  })();
};

export const catchError = (
  error,
  at = "Mention Store Action Name To Track Error At:"
) => {
  console.log(`======================= Start =========================`);
  const { status, data } = error.response;
  console.log(
    "At:",
    at,
    " | status: ",
    status,
    `| error data: `,
    data
  );
  if (status === 401) {
    notification.error(data?.error || data?.message);
  }
  
  if (status === 400) {
    notification.error(data?.error || data?.message);
  }
  
  data?.errors?.length > 0 &&
  data.errors?.forEach((item) => {
    notification.error(item?.msg);
  });
  console.log(`======================= End ========================= \n\n\n\n`);
};

export const onLogOutClearAll = (naviagte = null) => {
  localStorage.removeItem(JWT_AUTH_ACCESS_TOKEN);
  naviagte(constRoute.login);
  resetStore();
};


export const sortCol = (a, b, dataIndex) => {
  if (a[dataIndex]?.length > 0 && b[dataIndex]?.length > 0) {
    return a[dataIndex].length - b[dataIndex].length;
  } else {
    return null;
  }
};



