
import { Document, Page, Text, View, StyleSheet, Image } from '@react-pdf/renderer';

const VolunteerDocument = ({ data, imageBase64, imageError }) => {

    console.log('imageBase64----->', imageBase64)
    console.log('imageError----->', imageError)



    const styles = StyleSheet.create({
        page: {
            padding: 30,
            backgroundColor: '#E4E4E4',
        },
        section: {
            marginBottom: 10,
            padding: 10,
            backgroundColor: '#fff',
            borderRadius: 5,
        },
        heading: {
            fontSize: 16,
            marginBottom: 6,
            fontWeight: 'bold',
        },
        text: {
            fontSize: 12,
            marginBottom: 4,
        },
        image: {
            width: 100,
            height: 100,
            marginBottom: 10,

        },
    });

    const formatDate = (dateString) => {
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        return new Date(dateString).toLocaleDateString(undefined, options);
    };




    return (
        <Document>
            <Page size="A4" style={styles.page}>

                <View style={styles.section}>
                    <Text style={styles.heading}>Image</Text>
                    {imageError ? (
                        <Text style={styles.errorText}>Image could not be loaded</Text>
                    ) : imageBase64 ? (
                        <Image style={styles.image} src={imageBase64} />
                    ) : (
                        <Text>Loading image...</Text>
                    )}
                </View>

                <View style={styles.section}>
                    <Text style={styles.heading}>Details</Text>
                    <Text style={styles.text}>Name: {data?.name}</Text>
                    <Text style={styles.text}>Email: {data?.email}</Text>
                    <Text style={styles.text}>Contact Number: {data?.contact_number}</Text>
                    <Text style={styles.text}>Donate : {data?.donated}</Text>
                    <Text style={styles.text}>Status: {data?.status}</Text>
                    <Text style={styles.text}>location: {data?.location}</Text>
                    <Text style={styles.text}>Created Date: {formatDate(data?.created_at)}</Text>
                </View>

                <View style={styles.section}>
                    <Text style={styles.heading}>Reason</Text>
                    <Text style={styles.text}>{data?.reason}</Text>
                </View>
            </Page>
        </Document>
    );
};

export default VolunteerDocument;