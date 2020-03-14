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
        * Vuex
        * Vuetify
        * Material UI
        * Kendo
*/
// Frontend Logos
import HTML5Logo from '@/assets/svg/logos/colored/html5.svg';
import CSS3Logo from '@/assets/svg/logos/colored/css3.svg';
import ES6Logo from '@/assets/svg/logos/colored/es6.svg';
import SassLogo from '@/assets/svg/logos/colored/sass.svg';
import ReactLogo from '@/assets/svg/logos/colored/react.svg';
import ReduxLogo from '@/assets/svg/logos/colored/redux.svg';
import VueLogo from '@/assets/svg/logos/colored/vue.svg';
import WebpackLogo from '@/assets/svg/logos/colored/webpack.svg';


/*
  TODO: get platform logos
        * Make
        * Bash
        * Expect
        * NGINX
        * Git
        * Skaffold
        * Jenkins
*/
// Platform Logos
import AWSLogo from '@/assets/svg/logos/colored/aws.svg';
import HerokuLogo from '@/assets/svg/logos/colored/heroku.svg';
import GCPLogo from '@/assets/svg/logos/colored/google-cloud-platform.svg';
import DockerLogo from '@/assets/svg/logos/colored/docker.svg';
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
    label: 'HTML5',
    logo: HTML5Logo,
  },
  {
    label: 'CSS3',
    logo: CSS3Logo,
  },
  {
    label: 'ES6',
    logo: ES6Logo,
  },
  {
    label: 'Sass',
    logo: SassLogo,
  },
  {
    label: 'React',
    logo: ReactLogo,
  },
  {
    label: 'Redux',
    logo: ReduxLogo,
  },
  {
    label: 'Vue',
    logo: VueLogo,
  },
  {
    label: 'Webpack',
    logo: WebpackLogo,
  },
];

export const PlatformSkills = [
  {
    label: 'GCP',
    logo: GCPLogo,
  },
  {
    label: 'AWS',
    logo: AWSLogo,
  },
  {
    label: 'Heroku',
    logo: HerokuLogo,
  },
  {
    label: 'Docker',
    logo: DockerLogo,
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
