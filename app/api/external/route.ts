import { NextResponse } from "next/server";
const EXTERNAL_API_URL = "https://jsonplaceholder.typicode.com/posts"; //first we store the api url in a variable

export async function GET() {
  try {
    const response = await fetch(EXTERNAL_API_URL); //then the data which is coming from api is also store in a variabl which is called response.

    //now we apply condition if else
    if (!response.ok) {
      //! it means that if agr hmara response hamne sahi nh milta to kia kro
      return NextResponse.json(
        {
          success: false,
          message: "Fetching data from API ",
        }, //now in the next line we will check the status if we don't know
        {
          status: response.status,
        }
      );
    }
    // now here we convert the fetching data which is in the object form will convert into JSON
    const data = await response.json(); //after this storing and converting data into json we return a positive response.
    return NextResponse.json({
      //here we pass success true and return the fetching data
      success: true, data,
    });
  } catch (error: unknown) {
    if (error instanceof Error) {
      return NextResponse.json({
        success: false,
        message: "Get the Error",
        error: error.message,
      });
    } else {
      return NextResponse.json({
        success: false,
        message: "get the error",
        error: String(error),
      });
    }
  }
}
