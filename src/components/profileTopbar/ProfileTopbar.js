import {
  View,
  TouchableOpacity,
  Linking,
  Text,
  Modal,
  TextInput,
} from "react-native";
import React, { useCallback, useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { ValueDiscription } from "../ValueDiscription";
import { ProfileText } from "../ProfileText";
import { styles } from "./styles";
import { THEME } from "../../theme";
import { loadPlan } from "../../store/actions/drillPlan";
import { setEvent, setPlan } from "../../store/actions/test";

export const ProfileTopbar = ({ user, navigation }) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadPlan());
  }, [dispatch]);
  const [flag, setFlag] = useState("white");
  const [modalView, setModalView] = useState(false);
  const [trainModalView, setTrainModalView] = useState(false);
  const plans = useSelector((state) => state.drillPlan.allPlan);
  const handlePress = useCallback(async () => {
    const supported = await Linking.canOpenURL("https://" + user.network);
    if (supported) {
      await Linking.openURL("https://" + user.network);
    } else {
      console.log("cant open url");
    }
  });

  const dispatchPlan = () => {
    dispatch(setPlan());
  };

  const dispatchEvent = () => {
    dispatch(setEvent());
  };
  return (
    <View style={styles.info}>
      <ValueDiscription
        value={user.name + " " + user.surname}
        stylename={"name"}
      />
      <View style={styles.userInfo}>
        {user.isCoach ? (
          <>
            <ValueDiscription
              value={2}
              discription="клиентов"
              stylename={"statistics"}
            />
            <ValueDiscription
              value={"6"}
              discription="стаж"
              stylename={"statistics"}
            />
            <ValueDiscription
              value={4.9}
              discription="рейтинг"
              stylename={"statistics"}
            />
          </>
        ) : (
          <>
            <ValueDiscription
              value={user.height}
              discription="height"
              stylename={"statistics"}
            />
            <ValueDiscription
              value={user.weight}
              discription="weight"
              stylename={"statistics"}
            />
            <ValueDiscription
              value={user.age}
              discription="age"
              stylename={"statistics"}
            />
          </>
        )}
      </View>
      <View style={styles.selfDisc}>
        <ValueDiscription
          value={user.aboutSelf}
          discription={user.aboutTraining}
          stylename={"statistics"}
        />
        <TouchableOpacity onPress={handlePress} style={{ marginTop: 10 }}>
          <ProfileText value={user.network} />
        </TouchableOpacity>
        {/* <ProfileText value={user.phone} /> */}
      </View>
      {!user.isCoach ? (
        <>
          <Modal
            animationType="slide"
            transparent={true}
            visible={modalView}
            onRequestClose={() => {
              Alert.alert("Modal has been closed.");
              setModalVisible(!modalVisible);
            }}
          >
            <View style={styles.centeredView}>
              <View style={styles.modalView}>
                    <TouchableOpacity
                      style={{
                        height: 20,
                        marginBottom: 10,
                        flexDirection: "row",
                        width: '40%',
                        justifyContent: 'space-between'
                      }}
                      onPress={() => setFlag("green")}
                    >
                      <View
                        style={{
                          height: 16,
                          width: 16,
                          backgroundColor: 'white',
                          marginRight: 20,
                        }}
                      ></View>
                      <Text
                        style={{ color: THEME.HEADLINE_TEXT }}
                        key={Date.now() + Math.random()}
                      >
                        Знакомство
                      </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                      style={{
                        height: 20,
                        marginBottom: 10,
                        flexDirection: "row",
                        width: '40%',
                        justifyContent: 'space-between'
                      }}
                      onPress={() => setFlag("green")}
                    >
                      <View
                        style={{
                          height: 16,
                          width: 16,
                          backgroundColor: flag,
                          marginRight: 20,
                          
                        }}
                      ></View>
                      <Text
                        style={{ color: THEME.HEADLINE_TEXT }}
                        key={Date.now() + Math.random()}
                      >
                        Кардио
                      </Text>
                    </TouchableOpacity>

                <TouchableOpacity
                  style={styles.btn}
                  onPress={() => {
                    setModalView(!modalView);
                    dispatchPlan();
                  }}
                >
                  <Text style={styles.clientInfoTextDisc}>Подвердить</Text>
                </TouchableOpacity>
              </View>
            </View>
          </Modal>
          <Modal
            animationType="slide"
            transparent={true}
            visible={trainModalView}
            onRequestClose={() => {
              Alert.alert("Modal has been closed.");
              setModalVisible(!modalVisible);
            }}
          >
            <View style={styles.centeredView}>
              <View style={styles.modalView}>
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-around",
                  }}
                >
                  <TextInput
                    style={{ ...styles.TextInput, marginRight: 30 }}
                    placeholder="День"
                    placeholderTextColor={THEME.PARAGRAPH}
                  />

                  <TextInput
                    style={{ ...styles.TextInput, marginLeft: 30 }}
                    placeholder="Месяц"
                    placeholderTextColor={THEME.PARAGRAPH}
                  />
                </View>
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-around",
                  }}
                >
                  <TextInput
                    style={{ ...styles.TextInput, marginRight: 30 }}
                    placeholder="Время"
                    placeholderTextColor={THEME.PARAGRAPH}
                  />

                  <TextInput
                    style={{ ...styles.TextInput, marginLeft: 30 }}
                    placeholder="Продолжительность"
                    placeholderTextColor={THEME.PARAGRAPH}
                  />
                </View>
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-around",
                  }}
                >
                  <TextInput
                    style={{ ...styles.TextInput, marginRight: 30 }}
                    placeholder="Описание"
                    placeholderTextColor={THEME.PARAGRAPH}
                  />
                </View>

                <TouchableOpacity
                  style={styles.btn}
                  onPress={() => {
                    setTrainModalView(!trainModalView);
                    dispatchEvent();
                  }}
                >
                  <Text style={styles.clientInfoTextDisc}>Подвердить</Text>
                </TouchableOpacity>
              </View>
            </View>
          </Modal>
          <View style={styles.actions}>
            <TouchableOpacity
              style={styles.btn}
              onPress={() => setTrainModalView(!trainModalView)}
            >
              <Text style={styles.clientInfoTextDisc}>Тренировка</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.btn}
              onPress={() => setModalView(!modalView)}
            >
              <Text style={styles.clientInfoTextDisc}>Назначить план</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btn} onPress={() => 0}>
              <Text style={styles.clientInfoTextDisc}>Написать</Text>
            </TouchableOpacity>
          </View>
        </>
      ) : null}
    </View>
  );
};
