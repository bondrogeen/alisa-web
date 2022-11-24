import alisa from '../alisa';

import Response from '../helpers/Response';

export default {
  token: async (req, res) => {
    console.log(req.body);
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
  conection: async (req, res) => {
    console.log(req.body);
    try {
      const { token } = req.body;
      if (!token) {
        Response.InvalidUserOrPass(res);
        return;
      }
      alisa.setToken(token);
      const data = await alisa.conection();
      Response.Ok(res, data);
    } catch (error) {
      Response.InternalServerError(res);
    }
  },
  init: async (req, res) => {
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
