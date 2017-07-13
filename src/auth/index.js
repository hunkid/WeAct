export default {
  data: {
    authenticated: false
  },
  getAuthHeader () {
    return {
      'Authorization': 'Bearer ' + localStorage.getItem('token')
    }
  },
  checkAuth () {
    var token = localStorage.getItem('token')
    if (token) {
      this.authenticated = true
    } else {
      this.authenticated = false
    }
  }
}
