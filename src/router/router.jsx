import { createBrowserRouter } from "react-router-dom";
import Layout from "../layout/Layout";
import HomePage from "../pages/home/HomePage";
import AboutPage from "../pages/about/AboutPage";
import ServicePage from "../pages/service/ServicePage";
import FundraisingPage from "../pages/fundraising/FundraisingPage";
import PodcastPage from "../pages/podcast/PodcastPage";
import AuctionPage from "../pages/auction/AuctionPage";
import ContactPage from "../pages/contact/ContactPage";
import TermPage from "../pages/term/TermPage";
import AdminDashboard from "../pages/dashboard/adminDashboard/AdminDashboard";
import CommonDashboard from "../pages/dashboard/adminDashboard/commonDashboard/CommonDashboard";
import Contributors from "../pages/dashboard/adminDashboard/contributors/Contributors";
import Volunteers from "../pages/dashboard/adminDashboard/volunteers/Volunteers";
import Auction from "../pages/dashboard/adminDashboard/auction/Auction";

import DonationTransaction from "../pages/dashboard/adminDashboard/donationTransaction/DonationTransaction";
import PodcastStories from "../pages/dashboard/adminDashboard/podcastStories/PodcastStories";
import Subscribers from "../pages/dashboard/adminDashboard/subscribers/Subscribers";
import MyTeam from "../pages/dashboard/adminDashboard/myTeam/MyTeam";
import Settings from "../pages/dashboard/adminDashboard/settings/Settings";
import FAQs from "../pages/dashboard/adminDashboard/faq/FAQs";
import AdminDashboardLogin from "../pages/dashboard/adminDashboard/authtication/AdminDashboardLogin";
import DashboardForgetPassword from "../pages/dashboard/adminDashboard/authtication/DashboardForgetPassword";
import DashboardOtp from "../pages/dashboard/adminDashboard/authtication/DashboardOtp";
import DashboardCreateNewPassword from "../pages/dashboard/adminDashboard/authtication/DashboardCreateNewPassword";
import AdminRoutes from "./AdminRoutes";

import AggrementPage from "../pages/aggrement/AggrementPage";
import StripeForm from "../components/client/modal/payment/StripeForm";
import CustomCalendar from "../components/client/calender/DateCalender";
import PaymentSuccess from "../components/client/modal/payment/PaymentSuccess";
import DonationFormModal from "../components/client/donation-form-modal/DonationFormModal";
import PaypalDonationFrom from "../components/client/paypal-payment/PaypalDonationFrom";
import PaymentDetails from "../components/client/paypal-payment/PaymentDetails";
import BitPayment from "../components/client/bitModal/BitPayment";
import UserDetails from "../components/client/modal/payment/UserDetails";
import AudioFile from "../components/client/audio/AudioFile";
import LoginForm from "../components/client/login/LoginFrom";
import RegistrationForm from "../components/client/RegistrationForm/RegistrationForm";
import Notification from "../redux/notification/Notification";


export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    children: [
      {
        path: "/",
        element: <HomePage></HomePage>,
      },
      {
        path: "about",
        element: <AboutPage></AboutPage>,
      },
      {
        path: "service",
        element: <ServicePage></ServicePage>,
      },
      {
        path: "fundraising-get-involved",
        element: <FundraisingPage></FundraisingPage>,
      },
      {
        path: "auction",
        element: <AuctionPage></AuctionPage>,
      },
      {
        path: "contact",
        element: <ContactPage></ContactPage>,
      },
      {
        path: "podcast",
        element: <PodcastPage></PodcastPage>,
      },
      {
        path: "/terms",
        element: <TermPage></TermPage>,
      },

    ],
  },
  {
    path: "/general",
    element: <AggrementPage></AggrementPage>
  },
  {
    path: "/donate-from/:paymentCard",
    element: <DonationFormModal />
  },
  {
    path: "/paypa-donate-from",
    element: <PaypalDonationFrom />
  },
  {
    path: "/payment-details",
    element: <PaymentDetails />
  }
  ,
  {
    path: "/payment-form",
    element: <UserDetails />
  },
  {
    path: "/bit-payment",
    element: <BitPayment />
  },
  {
    path: "/date",
    element: <CustomCalendar></CustomCalendar>
  },
  {
    path: "/payment-success",
    element: <PaymentSuccess></PaymentSuccess>
  },

  {
    path: "/audio",
    element: <AudioFile></AudioFile>
  },
  {
    path: "/login",
    element: <LoginForm />
  },
  {
    path: "/register",
    element: <RegistrationForm />
  },

  // admin dashboard routes here
  {
    path: "/admin/dashboard",
    element: (
      <AdminRoutes>
        <AdminDashboard />
      </AdminRoutes>
    ),
    children: [
      {
        path: "/admin/dashboard",
        element: <CommonDashboard />,
      },
      {
        path: "contributors",
        element: <Contributors />,
      },
      {
        path: "volunteers",
        element: <Volunteers />,
      },
      {
        path: "auction",
        element: <Auction />,
      },
      {
        path: "donation-transaction",
        element: <DonationTransaction />,
      },
      {
        path: "podcast-stories",
        element: <PodcastStories />,
      },
      {
        path: "subscribers",
        element: <Subscribers />,
      },
      {
        path: "my-team",
        element: <MyTeam />,
      },
      {
        path: "faq-page",
        element: <FAQs />,
      },
      {
        path: "settings",
        element: <Settings />,
      },
      {
        path: "notification",
        element: <Notification />,
      },
    ],
  },

  //=================== Dashboard Authentication ================

  {
    path: "/admin/dashboard/login",
    element: <AdminDashboardLogin />,
  },
  {
    path: "/admin/dashboard/forget-password",
    element: <DashboardForgetPassword />,
  },
  {
    path: "/admin/dashboard/otp",
    element: <DashboardOtp />,
  },
  {
    path: "/admin/dashboard/create-new-password",
    element: <DashboardCreateNewPassword />,
  },
]);
