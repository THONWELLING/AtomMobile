import React from "react";
import { SafeAreaView, useWindowDimensions } from "react-native";
import { StyleSheet, Dimensions } from 'react-native';
import Pdf from "react-native-pdf";

interface PdfProps {
  pdfConteudo: string;
}


const DanfePdf: React.FC<PdfProps> = ({ pdfConteudo }) => {
  const { width, height } = useWindowDimensions();
  const source = { uri:`data:application/pdf;base64,${pdfConteudo}`, };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Pdf
        source={source}
        onLoadComplete={(numberOfPages, filePath) => {
          console.log(`Number of pages: ${numberOfPages}`);
        }}
        onPageChanged={(page, numberOfPages) => {
          console.log(`Current page: ${page}`);
        }}
        onError={(error) => {
          console.log(error);
        }}
        onPressLink={(uri) => {
          console.log(`Link pressed: ${uri}`);
        }}
        style={{ flex: 1, width, height }}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
      flex: 1,
      justifyContent: 'flex-start',
      alignItems: 'center',
      marginTop: 25,
  },
  pdf: {
      flex:1,
      width:Dimensions.get('window').width,
      height:Dimensions.get('window').height,
  }
});

export default DanfePdf;