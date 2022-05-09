<html>
  <head>
    <style>
      * {
          color: black;
      }
      .OTP {
          color: white;
          background-color: #096fe4;
          padding: 1rem 2.5rem;
          font-size: 17px;
          font-weight: 700;
          border-radius: 5px;
          text-decoration: none;
          line-height: 25px;
          letter-spacing: .15px;
      }


      .mt1 {
          margin-top: 1rem;
      }

      .colorBlue {
          color: #096fe4;
      }

      #body {
        margin: 0 auto;
        text-align: center;
        max-width: 580px;
        padding: 1rem 2rem;
        border-radius: 5px;
        font-size: 14px;
        font-weight: 400;
        letter-spacing: .15px;
        line-height: 20px;
      }

      #body img {
          max-width: 170px;
      }

      #body .alignLeft {
          text-align: left;
      }

      #body .dFlex {
        display: flex;
      }

      #body .boxUser {
          padding: 0.7rem;
          background: #096fe4;
          border-radius: 15px;
          display: inline-block;
      }

      #body .boxUser span {
          display: block;
          max-width: 25px;
          float: left;
          margin-right: 10px;
      }

      #body .boxUser span img {
          width: 100%;
      }

      #body .boxUser h2 {
          margin: 0;
          color: white;
          float: right;
          vertical-align: middle;
          margin-top: 4px;
          letter-spacing: 2px;
      }

      #header {
          margin: 0 auto;
          text-align: center;
          max-width: 580px;
          padding: 1rem 2rem .5rem 2rem;
          background: url('https://silicagel.s3.ap-southeast-1.amazonaws.com/cdn/Background-email.png') no-repeat;
          background-attachment: fixed;
          background-size: cover;
          display: block;
          border-top-left-radius: 5px;
          border-top-right-radius: 5px;
      }

      #header .logoHeader {
          min-width: 150px;
      }

      #section {
          margin: 3rem auto 0;
          text-align: left;
          max-width: 580px;
          padding: 1rem 2rem;
          background: rgba(128, 128, 128, 0.055);
          font-size: 14px;
          font-weight: 400;
          letter-spacing: .15px;
          line-height: 20px;
      }

      #section p {
          text-align: center;
      }

      #section .alignLeft {
          text-align: left;
      }

      #section .linkNone {
          text-decoration: none;
          color: rgb(97, 97, 97);
      }

      #section .grey {
          color: rgb(97, 97, 97);
      }

      #footer {
        margin: 0 auto;
        text-align: center;
        max-width: 580px;
        padding: 1rem 2rem;
        background: rgba(128, 128, 128, 0.116);
        font-size: 14px;
        font-weight: 400;
        letter-spacing: .15px;
        line-height: 20px;
      }

      @media screen (max-width: 480px) {
        #body img {
            max-width: 170px;
        }
      }
    </style>
  </head>
  <body>
    <div id='header'>
        {{-- <div class='dFlex'>
            <div>
                <img src="https://silicagel.s3.ap-southeast-1.amazonaws.com/cdn/Flat-design-farm-cartoon-illustration-vector.png" alt="">
            </div>
            <div>
                <img src="https://silicagel.s3.ap-southeast-1.amazonaws.com/cdn/Logo.png" alt="">
            </div>
            <div>
                <img src="" alt="">
            </div>
        </div> --}}
        <a href="#"><img src="https://silicagel.s3.ap-southeast-1.amazonaws.com/cdn/Logo.png" alt="" class='logoHeader'></a>
    </div>
    <div id='body'>
      <img src="https://silicagel.s3.ap-southeast-1.amazonaws.com/cdn/register-success.png" alt="">
      <br>
      <h1>SELAMAT DATANG</h1>
      {{-- <div class='boxUser'>
        <span><img src="https://silicagel.s3.ap-southeast-1.amazonaws.com/cdn/wave+hand.png" alt=""></span><h2>{{$details['fullname']}}</h2>
      </div> --}}
      <h3 class='colorBlue'>Terima kasih telah bergabung di Megamendung Digital</h3>
      <br>
      <p>Verifikasi email anda sekarang untuk menikmati seluruh fitur yang tersedia.</p>
      <br>
      <p>
        <p class='OTP' style="color: white;">
            089076
        </p>
      </p>
      <br>
      <p class='alignLeft'>Nama penggunamu adalah : <b>{{ $details['username'] }}</b></p>
      <p class='alignLeft'>Email penggunamu adalah : <b>{{ $details['email'] }}</b></p>
      <p class='alignLeft'>Dimohon untuk tidak memberikan OTP tersebut kepada orang lain termasuk pihak pengelola Megamendung Digital.</p>
    </div>
    <div id='section'>
        <a href="#"><img src="https://silicagel.s3.ap-southeast-1.amazonaws.com/cdn/Logo-grey.png" alt=""></a>
        <hr>
        <p>
            Megamendung Digital adalah aplikasi desa digital yang dikembangkan oleh Desa Digital Megamendung. Dengan aplikasi ini, diharapkan para pengunjung atau warga setempat dapat mengakses fasilitas - fasilitas yang tersedia dengan mudah dan cepat. Diharapkan pula aplikasi ini menjadi media informasi yang bermanfaat bagi para pengunjung. <br/>
            Sasaran utama aplikasi ini adalah para pengunjung atau wisatawan serta penduduk setempat agar bisa mendapatkan kemudahan dalam mengakses fasilitas desa. Aplikasi ini juga dapat digunakan oleh para petugas desa untuk mengelola fasilitas desa.
        </p>
        <hr>
        {{-- <p class='alignLeft'>Dapatkan juga MegaDigi di : <a href="#" class='linkNone'><b>Android</b></a></p> --}}
        {{-- <hr> --}}
        <br>
        <p class='alignLeft'>Pesan ini telah dikirimkan ke <a href="mailto:{{ $details['email'] }}">{{ $details['email'] }}</a>. Jika kamu memiliki pertanyaan atau keluhan, silahkan <a href="#" class='linkNone'><b>Hubungi Kami.</b></a></p>
        <br>
        <p class='alignLeft grey'><b><a href="#" class='linkNone'>Syarat Ketentuan</a> | <a href="#" class='linkNone'>Kebijakan Privasi</a> | <a href="#" class='linkNone'>Hubungi Kami</a></b></p>
    </div>
    <div id='footer'>
        <p>
            Copyright © 2022 Megamendung Digital. All Rights Reserved
        </p>
    </div>
  </body>
</html>
