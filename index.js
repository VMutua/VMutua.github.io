<style>
        body {
            background-color: rgb(152, 223, 233);
        }
    </style>
    <style>
        * {
            box-sizing: border-box;
        }
        
        .menu {
            float: left;
            width: 20%;
            text-align: left;
            padding: 20px;
        }
        
        .menu a {
            background-color: #e5e5e5;
            padding: 8px;
            margin-top: 7px;
            display: block;
            width: 100%;
            color: black;
        }
        
        .main {
            float: left;
            width: 60%;
            padding: 20px;
        }
        
        .right {
            background-color: #e5e5e5;
            float: left;
            width: 20%;
            padding: 15px;
            margin-top: 7px;
            text-align: left;
        }
        
        @media only screen and (max-width:620px) {
            /* For mobile phones: */
            .menu,
            .main,
            .right {
                width: 100%;
            }
        }
    </style>

    <!-- Start of Banner CSS-->
    <style>
        body,
        html {
            height: 100%;
            margin: 0;
            font-family: Arial, Helvetica, sans-serif;
        }
        
        .banner-image {
            background-image: url(images/top_banner.gif);
            height: 25%;
            background-position: center;
            background-repeat: no-repeat;
            background-size: cover;
            position: relative;
        }
        
        .banner-text {
            text-align: center;
            position: relative;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            color: white;
        }
        
        .banner-text button {
            border: none;
            outline: 0;
            display: inline-block;
            padding: 10px 25px;
            color: black;
            background-color: #ddd;
            text-align: center;
            cursor: pointer;
        }
        
        .banner-text button:hover {
            background-color: #555;
            color: white;
        }
    </style>
