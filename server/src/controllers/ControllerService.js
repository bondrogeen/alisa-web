import alisa from '../alisa';

import Response from '../helpers/Response';

export default {
  token: async (req, res) => {
    try {
      const { username, password } = req.body;
      if (!username && !password) {
        Response.InvalidUserOrPass(res);
        return;
      }
      const data = await alisa.getYandexToken({ username, password });
      Response.Ok(res, data);
    } catch (error) {
      Response.InternalServerError(res);
    }
  },
  init: async (req, res) => {
    try {
      console.log(req.body);
      const { token } = req.body;
      if (!token) {
        Response.InvalidParams(res);
        return;
      }
      const data = await alisa.setToken(token);
      if (!data) return Response.Unauthorized(res);
      Response.Ok(res, data);
    } catch (error) {
      Response.InternalServerError(res, error);
    }
  },
  connection: async (req, res) => {
    try {
      const data = await alisa.connection();
      Response.Ok(res, data);
    } catch (error) {
      Response.InternalServerError(res);
    }
  },
  state: async (req, res) => {
    try {
      const data = await alisa.getState();
      Response.Ok(res, data);
    } catch (error) {
      Response.InternalServerError(res);
    }
  },
  scan: async (req, res) => {
    try {
      const data = await alisa.findDeviceList();
      Response.Ok(res, data);
    } catch (error) {
      Response.InternalServerError(res);
    }
  },
};
