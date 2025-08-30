import { NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";

export async function GET() {
  try {
    const db = await connectDB();
    
    if (!db.connection?.db) {
      throw new Error('Failed to connect to database');
    }
    
    // Get the testimonials collection
    const testimonials = await db.connection.db
      .collection('testimonials')
      .find({})
      .toArray();
      
    return NextResponse.json({ 
      status: "success",
      data: testimonials
    });
    
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : 'An unknown error occurred';
    return NextResponse.json(
      { status: "error", message: "Failed to fetch testimonials", error: errorMessage },
      { status: 500 }
    );
  }
}
