import axios from "axios";

class ApiService {
  constructor() {
    this.api = axios.create({
      baseURL: process.env.REACT_APP_API_BASE,
    });

    this.api.interceptors.request.use((config) => {
      // Verifica se já temos as informações do usuário logado no localStorage
      const storedUser = localStorage.getItem("loggedInUser");

      const loggedInUser = JSON.parse(storedUser || '""');

      if (loggedInUser.token) {
        config.headers = {
          Authorization: `Bearer ${loggedInUser.token}`,
        };
      }

      return config;
    });
  }

  async signUp(user) {
    return await this.api.post("/signup", user);
  }

  async login(user) {
    return await this.api.post("/login", user);
  }

  //   async getGuestUserPhoneReservation(guestUserPhone) {
  //   const res = await this.api.get(`/reservations/guest/${guestUserPhone}`);
  //   return res.data
  // }


    async getParkingLotById(id) {
    console.log("in api service getparkinglot")
    const res = await this.api.get(`/parkingLots/${id}/pricing`);

    return res.data
  }

    async createReservation(payload) {

    const res = await this.api.post("/reservations", payload);
    return res.data
  }

      async getAReservation(guestUserPhone) {

    const res = await this.api.get(`/reservations/guest/${guestUserPhone}`);
    return res.data
  }

  //   async createGuestUserPhoneReservation(guestUserPhone) {
  //   const res = await this.api.patch(`/reservations/guest/${guestUserPhone}`);
  //   return res.data
  // parkinglotId }





}

export default new ApiService();
