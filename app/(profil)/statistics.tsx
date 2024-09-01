import { Stats } from "@/api/statistics";
import { GradientBackground } from "@/components/GradientBackground";
import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
} from "react-native";

import {
  LineChart,
} from "react-native-chart-kit";

export default function StatisticScreen() {

  const [statisticsState,
    setStatisticsState] = useState<any>();
  const data = {
    labels: [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ],
    datasets: [
      {
        data: [20, 45, 28, 80, 99, 43],
      },
    ],
  };

  useEffect(() => {
    const fetchData = async () => {
      const tampData = await Stats.getStatistics();
      setStatisticsState([...tampData]);
    };
    fetchData();
  }, []);

  console.log("stats : ", statisticsState);

  return (
    <GradientBackground>
      <View style={styles.container}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Your Statistics</Text>
        </View>
        <Text style={styles.title}>number of times used</Text>
        {statisticsState ? <LineChart
          data={{
            labels: ["January", "February", "March", "April", "May", "June"],
            datasets: [
              {
                data: [5, 0, 6, 10, 15, 6],
              },
            ],
          }}
          width={350} // from react-native
          height={220}
          // yAxisLabel="day"
          yAxisSuffix=""
          yAxisInterval={1} // optional, defaults to 1
          chartConfig={{
            backgroundColor: "#074264",
            backgroundGradientFrom: "#074264",
            backgroundGradientTo: "#83A5C7",
            decimalPlaces: 2, // optional, defaults to 2dp
            color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
            labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
            style: {
              borderRadius: 16,
            },
            propsForDots: {
              r: "6",
              strokeWidth: "2",
              stroke: "#ffa726",
            },
          }}
          bezier
          style={{
            marginVertical: 8,
            borderRadius: 16,
          }}
        /> :
        <></>
        }
      </View>
    </GradientBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
    // marginTop: 250,
  },
  titleContainer: {
    width: "100%",
    marginVertical: 75,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 36,
    fontWeight: "bold",
    color: "#fff",
    marginTop: 50,
    paddingHorizontal: 24,
  },
});
