import { Stats } from "@/api/statistics";
import { GradientBackground } from "@/components/GradientBackground";
import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { LineChart } from "react-native-chart-kit";

export default function StatisticScreen() {
  const [statisticsState, setStatisticsState] = useState<any>();

  useEffect(() => {
    const fetchData = async () => {
      const tampData = await Stats.getStatistics();
      setStatisticsState({ ...tampData });
    };
    fetchData();
  }, []);

  const getLastSixMonths = (data: any) => {
    const allMonths = [
      "Janvier",
      "Février",
      "Mars",
      "Avril",
      "Mai",
      "Juin",
      "Juillet",
      "Août",
      "Septembre",
      "Octobre",
      "Novembre",
      "Décembre",
    ];

    const currentMonthIndex = new Date().getMonth(); // Get the current month index (0-11)
    const lastSixMonths = [];
    const lastSixValues = [];

    // Iterate backwards from the current month to get the last six months
    for (let i = 5; i >= 0; i--) {
      const monthIndex = (currentMonthIndex - i + 12) % 12; // Calculate month index accounting for wrap-around
      const monthName = allMonths[monthIndex];
      lastSixMonths.push(monthName);
      lastSixValues.push(data[monthName] || 0); // Use 0 if the month doesn't exist in the data
    }

    return {
      labels: lastSixMonths,
      datasets: [
        {
          data: lastSixValues,
        },
      ],
    };
  };

  const filteredData = statisticsState ? getLastSixMonths(statisticsState) : null;

  return (
    <GradientBackground>
      <View style={styles.container}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Your Statistics</Text>
        </View>
        <Text style={styles.title}>Disk rotation</Text>
        {filteredData ? (
          <LineChart
            data={filteredData}
            width={350}
            height={220}
            yAxisSuffix=""
            yAxisInterval={1}
            chartConfig={{
              backgroundColor: "#074264",
              backgroundGradientFrom: "#074264",
              backgroundGradientTo: "#83A5C7",
              decimalPlaces: 2,
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
          />
        ) : (
          <Text style={styles.title}>Loading...</Text>
        )}
      </View>
    </GradientBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
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
