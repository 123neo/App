import { takeLatest, call, put } from 'redux-saga/effects';
import { USER_LOGIN, USER_LOGIN_FAILED, USER_LOGIN_SUCCESS } from '../constants/Login';

import { userLoginApi } from '../api/api.Login';

// export function* fetchLables(action) {
//   try {
//     const parameters = action.payload;
//     const responseBody = yield call(getLabels, parameters[0].userDetail.token);
//     yield put({
//       type: GET_LABELS_SUCCESS,
//       payload: responseBody.data.data,
//     });
//   } catch (e) {
//     yield put({
//       type: GET_LABELS_FAILED,
//       payload: {
//         error: true,
//       },
//       callback: action.callback,
//     });
//   }
// }

// export function* getAllTasks(action) {
//   try {
//     const parameters = action.payload;
//     const responseBody = yield call(getAllTasksApi, {
//       parameters,
//       token: action.token,
//     });
//     yield put({
//       type: GET_ALL_TASKS_SUCCESS,
//       payload: responseBody.data.data,
//     });
//   } catch (e) {
//     yield put({
//       type: GET_ALL_TASKS_FAILED,
//       payload: {
//         error: true,
//       },
//       callback: action.callback,
//     });
//   }
// }

export function* userLogin(action) {
  try {
    const parameters = action.payload;
    console.log(parameters);
    const responseBody = yield call(userLoginApi, parameters);
    debugger;
    yield put({
      type: USER_LOGIN_SUCCESS,
      payload: responseBody.data.data,
      callback: action.callback,
    });
  } catch (e) {
    yield put({
      type: USER_LOGIN_FAILED,
      payload: {
        error: true,
        response: e.response.data.Error,
      },
      callback: action.callback,
    });
  }
}

// export function* userSignup(action) {
//   try {
//     const parameters = action.payload;
//     const responseBody = yield call(userSignupApi, parameters);
//     yield put({
//       type: USER_SIGNUP_SUCCESS,
//       payload: responseBody.data.data,
//     });
//   } catch (e) {
//     yield put({
//       type: USER_SIGNUP_FAILED,
//       payload: {
//         error: true,
//         response: e.response.data.Error,
//       },
//       callback: action.callback,
//     });
//   }
// }

// export function* userLogout(action) {
//   try {
//     console.log(action);
//     const parameters = action.payload;
//     const responseBody = yield call(userLogoutApi, {
//       parameters,
//       token: action.token,
//     });
//     console.log(responseBody);
//     yield put({
//       type: LOGOUT_SUCCESS,
//       payload: responseBody.data.data,
//     });
//   } catch (e) {
//     yield put({
//       type: LOGOUT_FAILED,
//       payload: {
//         error: true,
//         response: e.response.data.Error,
//       },
//       callback: action.callback,
//     });
//   }
// }

export function* rootWatcherSaga() {
  yield takeLatest(USER_LOGIN, userLogin);
  // yield takeLatest(DELETE_TASK_SUCCESS , getAllTasks)
}
