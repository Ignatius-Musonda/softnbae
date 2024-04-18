import { createClient } from "contentful";

const useContentful = () => {
  // const client = createClient({
  //   space: "kp7895evg2nd",
  //   accessToken: "oUxVnvThnHaOFU8gaN8mHLRTSvdC2hlWh6WVjfhvMLs",
  //   host: "cdn.contentful.com",
  //   // content_type: "Product",
  // });
  const client = createClient({
    space: "kp7895evg2nd",
    accessToken: "eieMViKbcQqp9ejVR437kMmqZ7SagfqOOTKWZGfESRs",
    host: "cdn.contentful.com",
    // content_type: "product",
    //eieMViKbcQqp9ejVR437kMmqZ7SagfqOOTKWZGfESRs
  });

  const getAuthors = async () => {
    try {
      const entries = await client.getEntries({
        // content_type: "guest",
        // select: "fields"
      });

      console.log("entries",entries)
      const sanitizedEntries = entries.items.map((item) => {
        const avatar = item.fields.productName;
        return {
          ...item.fields,
          avatar
        };
      });

      return sanitizedEntries;
    } catch (error) {
      console.log(`Error fetching authors ${error}`);
    }
  };

  return { getAuthors };
};

export default useContentful;
