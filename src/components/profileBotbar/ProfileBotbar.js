import { View, ScrollView, Text } from "react-native";
import React, { useState } from "react";

import { VictoryChart, VictoryTheme, VictoryLine } from "victory-native";
import { Event } from "../Event";
import { styles } from "./styles";
import { ProfileSlider } from "../profileSlider/ProfileSlider";
import { useSelector } from "react-redux";
import { THEME } from "../../theme";

export const ProfileBotbar = ({ user, test }) => {
  const [event, setEvent] = useState(true);
  const [stat, setStat] = useState(false);
  const [plan, setPlan] = useState(false);

  const eventflag = useSelector((state) => state.test.event);
  const trainflag = useSelector((state) => state.test.plan);
  console.log(eventflag, trainflag)
  return (
    <View style={styles.wrapper}>
      <ProfileSlider
        setEvent={setEvent}
        setStat={setStat}
        setPlan={setPlan}
        event={event}
        stat={stat}
        plan={plan}
        user={user}
      />
      {event && eventflag ? (
        <>
          <Event
            date={15}
            month={"Июня"}
            user={test.name}
            type={"Тренировка"}
            time={5}
            event={"Тренировка"}
            duration={1}
          />
        </>
      ) : null}
      {stat ? (
        <>
          <View style={{ alignItems: "center" }}>
            <ScrollView>
              {/* <VictoryChart
                width={350}
                height={200}
                theme={VictoryTheme.material}
              >
                <VictoryLine
                  style={{
                    data: { stroke: "#c43a31" },
                    parent: { border: "1px solid #ccc" },
                  }}
                  data={[
                    { x: "Jan", y: 68 },
                    { x: "Feb", y: 69.7 },
                    { x: "Mar", y: 70.3 },
                    { x: "Apr", y: 70.3 },
                    { x: "May", y: 72 },
                  ]}
                />
              </VictoryChart> */}
            </ScrollView>
          </View>
        </>
      ) : null}
      {plan && trainflag ? (
        <>
          <View style={{borderTopWidth: 1,borderColor: THEME.PARAGRAPH, backgroundColor: THEME.BACKGROUND}}>
            <Text style={{color: THEME.BACKGROUND_DATE, fontFamily: 'Montserrat', marginBottom: 20}}>Тренировочный план: кардио </Text>
            <Text style={{color: THEME.BACKGROUND_DATE,fontFamily: 'Montserrat'}}>Рацион питания: не определен</Text>
          </View>
        </>
      ) : (
        null
      )}
    </View>
  );
};
