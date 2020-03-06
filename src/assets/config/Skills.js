/*
  TODO: get backend logos
        * golang
        * grpc
        * sinatra
        * rails
        * better ruby logo
*/

// Backend Logos
import NodeJSLogo from '@/assets/svg/logos/colored/nodejs.svg';
import ExpressLogo from '@/assets/svg/logos/colored/express.svg';
import RubyLogo from '@/assets/svg/logos/colored/ruby.svg';
import PythonLogo from '@/assets/svg/logos/colored/python.svg';
import FlaskLogo from '@/assets/svg/logos/colored/flask.svg';
import DjangoLogo from '@/assets/svg/logos/colored/django.svg';

/*
  TODO: get frontend logos
        * HTML5
        * CSS3
        * Sass
        * React
        * Redux
        * Vue
        * Vuex
        * Vuetify
        * Webpack
        * Material UI
        * Kendo
*/
// Frontend Logos
import ES6Logo from '@/assets/svg/logos/colored/es6.svg';

/*
  TODO: get platform logos
        * Make
        * Bash
        * Expect
        * NGINX
        * Git
        * Skaffold
        * Jenkins
        * Docker
        * Heroku
        * Google Cloud Platform
*/
// Platform Logos
import AWSLogo from '@/assets/svg/logos/colored/aws.svg';
import KubernetesLogo from '@/assets/svg/logos/colored/kubernetes.svg';

/*
  TODO: get other logos
        * Flutter
        * Android-NDK
        * MacOS
        * Windows
        * GNU/Linux
        * Ubuntu Server
        * Fedora
        * CentOS
*/
// Other Logos
import AndroidLogo from '@/assets/svg/logos/colored/android.svg';

export const BackendSkills = [
  {
    label: 'Node.js',
    logo: NodeJSLogo,
  },
  {
    label: 'Express',
    logo: ExpressLogo,
  },
  {
    label: 'Ruby',
    logo: RubyLogo,
  },
  {
    label: 'Python',
    logo: PythonLogo,
  },
  {
    label: 'Django',
    logo: DjangoLogo,
  },
  {
    label: 'Flask',
    logo: FlaskLogo,
  },
];

export const FrontendSkills = [
  {
    label: 'ES6',
    logo: ES6Logo,
  },
];

export const PlatformSkills = [
  {
    label: 'AWS',
    logo: AWSLogo,
  },
  {
    label: 'Kubernetes',
    logo: KubernetesLogo,
  },
];

export const OtherSkills = [
  {
    label: 'Android',
    logo: AndroidLogo,
  },
];
