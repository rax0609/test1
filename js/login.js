let sendButton = document.querySelector('button');
const axios = require('axios');

const showAlert = () => {
  Swal.fire({
      icon: 'success',
      title: 'Login Success!',
      text: 'Welcome to STUST-SA Student System!',
  }).then(async (result) => {
    if (result.isConfirmed) {
      //window.location.href = 'http://60.249.215.114/stust_student/admin/index.php'
      const CLIENT_ID = '893799094533894144';
      const CLIENT_SECRET = 'HZopOlif6SHJsb148Yk0zGX8_DBfDM0x';
      const REDIRECT_URI = '';
      window.location.href = `https://discord.com/api/oauth2/authorize?client_id=${CLIENT_ID}&redirect_uri=${encodeURIComponent(REDIRECT_URI)}&response_type=code&scope=identify`
      const code = req.query.code;
      const params = new URLSearchParams({
        client_id: CLIENT_ID,
        client_secret: CLIENT_SECRET,
        code,
        grant_type: 'authorization_code',
        redirect_uri: REDIRECT_URI,
        scope: 'identify guilds'
      });
    
      const headers = {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Accept-Encoding': 'application/x-www-form-urlencoded'
      };
    
      const response = await axios.post('https://discord.com/api/oauth2/token', params, headers);
    
      const userResponse = await axios.get('https://discord.com/api/users/@me', {
        headers: {
          Authorization: `Bearer ${response.data.access_token}`
        }
      });
    
      //'https://discord.com/api/oauth2/token'
      
    
      res.send(userResponse.data);
    }
  })
}