import { NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";

export async function GET() {
  try {
    const db = await connectDB();
    const dbName = db.connection?.name || 'unknown';
    const collections = db.connection?.db ? 
      await db.connection.db.listCollections().toArray() : [];
      
    return NextResponse.json({ 
      status: "success", 
      message: "MongoDB connected successfully!",
      database: dbName,
      collections: collections.map((c: any) => c.name)
    });
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : 'An unknown error occurred';
    return NextResponse.json(
      { status: "error", message: "Failed to connect to MongoDB", error: errorMessage },
      { status: 500 }
    );
  }
}