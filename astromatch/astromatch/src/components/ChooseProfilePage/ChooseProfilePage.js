import axios from "axios";
import React, { useEffect, useState } from "react";
import ChooseButtons from "./ChooseButtons";
import ProfileCard from "./ProfileCard";

const ChooseProfilePage = (props) => {
  const [profileToChoose, setProfileToChoose] = useState({});
  // const [choice, setChoice] = useState(false);
  //useState("")
  //useState(0)
  //useState(false)

  const getProfileToChoose = async () => {
    try {
      const response = await axios.get(
        "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/jeniferKindermann/person"
      );
      setProfileToChoose(response.data.profile);
    } catch (error) {
      console.error(error);
    }

    // .then(response => {

    // })
  };

  useEffect(() => {
    getProfileToChoose();
    console.log("Rodar só uma vez");
    console.log({ profileToChoose });
  }, []);

  const chooseProfile = async (choice) => {
    try {
      console.log({ choice });
      if (choice && profileToChoose?.id) {
        const body = {
          id: profileToChoose.id,
          choice: choice,
        };
        const response = await axios.post(
          "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/jeniferKindermann/choose-person",
          body
        );
        console.log({ response });
        getProfileToChoose();
        return;
      }
      setProfileToChoose({});
    } catch (error) {
      console.error({ error });
    }
  };

  // useEffect(async () => {
  //   async function callback() {
  //     await chooseProfile();
  //   }
  //   callback();
  // }, [choice, chooseProfile]);

  const onClickNo = () => {
    chooseProfile(false);
  };

  const onClickYes = () => {
    chooseProfile(true);
  };

  console.log("ChooseProfilePage", props.showTrash);
  return (
    <div>
      {profileToChoose ? (
        <>
          <ProfileCard profile={profileToChoose} />
          <ChooseButtons
            showTrash={props.showTrash}
            onClickNo={onClickNo}
            onClickYes={onClickYes}
          />
        </>
      ) : (
        <p>Carregando...</p>
      )}
    </div>
  );
};

export default ChooseProfilePage;
