import React, {Fragment} from "react";
import Header from "src/components/modules/Header";
import HeadContent from "src/hoc/headContent";
// import { useRouter } from "next/router";
// import { useAuthUser } from "src/hooks/useAuthUser";
const Setting = () => {
  // let authUsers = useRouter();
  // let authUser = useAuthUser();
  // useEffect(() => {
  //   if (!authUser) {
  //     authUsers.push("/");
  //   }
  // }, []);

  const meta = {
    title: `Account Settings`,
    description: `Charlet Retreat. Book one of the world's best chalets. Discover and book chalets everywhere around you. Check-In Check-Out.`,
    keywords: ``,
    route: '/account-setting',
  };

  return (
    <Fragment>
      <HeadContent title={meta.title} description={meta.description} keywords={meta.keywords} route={meta.route} />
      <Header />{" "}
    </Fragment>
  );
};

export default Setting;
