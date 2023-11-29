let sendButton = document.querySelector('button');

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
      const REDIRECT_URI = 'https://test.rxteam.net/test.html';
      window.location.href = `https://discord.com/api/oauth2/authorize?client_id=${CLIENT_ID}&redirect_uri=${encodeURIComponent(REDIRECT_URI)}&response_type=code&scope=identify`
      const code = req.query.code;
    }
  })
}
