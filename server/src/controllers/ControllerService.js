import alisa from '../alisa';

export default {
  token: async (req, res) => {
    console.log(req.body);
    try {
      const { username, password } = req.body;
      if (!username && !password) res.json({ error: 'not username, password' });
      const data = await alisa.getYandexToken({ username, password });
      res.json(data);
    } catch (error) {
      res.json({});
    }
  },
  scan: async (req, res) => {
    try {
      const data = await alisa.findDeviceList();
      res.json(data);
    } catch (error) {
      res.json({});
    }
  },
};
