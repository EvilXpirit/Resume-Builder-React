import React from "react";
import { Document, Page, Text, View, StyleSheet, Image } from "@react-pdf/renderer";

const styles = StyleSheet.create({
  page: {
    flexDirection: "row",
    backgroundColor: "#FFFFFF",
    padding: 40,
    fontFamily: "Helvetica",
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1,
  },
  header: {
    alignItems: "center",
    justifyContent: "flex-start",
    backgroundColor: "#87CEFA", 
    padding: 20,
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 10,
    color: "#333333",
  },
  subtitle: {
    fontSize: 14,
    marginBottom: 5,
    color: "#666666",
  },
  text: {
    fontSize: 12,
    marginBottom: 5,
    color: "#333333",
  },
  image: {
    width: 100,
    height: 100,
    marginBottom: 20,
    borderRadius: 50,
  },
});

const PDFDocument = ({ data }) => (
  <Document>
    <Page size="A4" style={styles.page}>
      <View style={styles.header}>
        <Image style={styles.image} src={data.image} />
        <Text style={styles.title}>{data.name}</Text>
        <Text style={styles.text}>{data.jobTitle}</Text>
        <Text style={styles.subtitle}>Contact</Text>
        <Text style={styles.text}>Email: {data.email}</Text>
        <Text style={styles.text}>Phone: {data.phoneNumber}</Text>
        <Text style={styles.text}>LinkedIn: {data.linkedin}</Text>
        <Text style={styles.text}>GitHub: {data.github}</Text>
      </View>
      <View style={styles.section}>
        <Text style={styles.subtitle}>Education</Text>
        <Text style={styles.text}>High School: {data.highSchool}</Text>
        <Text style={styles.text}>Intermediate: {data.intermediate}</Text>
        <Text style={styles.text}>Diploma: {data.diploma}</Text>
        <Text style={styles.text}>Graduation: {data.graduation}</Text>
        <Text style={styles.text}>Post Graduation: {data.postGraduation}</Text>
        <Text style={styles.subtitle}>Skills</Text>
        <Text style={styles.text}>{data.skills && data.skills.join(", ")}</Text>
        <Text style={styles.subtitle}>Experience</Text>
        {data.experiences && data.experiences.map((exp, index) => (
          <View key={index}>
            <Text style={styles.title}>{exp.heading}</Text>
            <Text style={styles.text}>{exp.duration}</Text>
            <Text style={styles.text}>{exp.expDescription.join(", ")}</Text>
          </View>
        ))}
        <Text style={styles.subtitle}>Address</Text>
        <Text style={styles.text}>{data.address}</Text>
      </View>
    </Page>
  </Document>
);

export default PDFDocument;
