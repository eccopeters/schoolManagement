import { db } from "../config/db.js";
import { calculateDistance } from "../utils/algorithms.js";
import { addSchoolSchema, listSchoolSchema } from "../utils/validators.js";

export async function listSchools(req, res, next) {
  try {
    const [error, data] = await listSchoolSchema.tryValidate(req.query)

    if(error){
      console.error("Validation Error: ", error)
      res.status(400).json({message: "Validation Error", error})
    }

    const {latitude, longitude} = data
    db.query("SELECT * FROM schools", (error, results)=>{
      if(error){
            console.error("DB Error: ", error)
            next(error)
      }
      const sortedSchools = results.map(school=>({
            ...school,
            distance : calculateDistance(parseFloat(latitude), parseFloat(longitude), school.latitude, school.longitude)
      })).sort((a, b)=> a.distance - b.distance)
      res.status(200).json({schools: sortedSchools, message: "Schools retrieved successfully"})
    })
  } catch (error) {
    next(error);
  }
}

export async function addSchools(req, res, next){
      try {
            const [error, data] = await addSchoolSchema.tryValidate(req.body)

            if(error){
                  console.error("Validation Error: ", error)
                  res.status(400).json({message: "Validation Error", error})
            }
            const {name, address, latitude, longitude} = data


            const query = "INSERT INTO schools (name, address, latitude, longitude) VALUES (?, ?, ?, ?)"

            db.query(query, [name, address, latitude, longitude], (error, result)=>{
                  if(error){
                        console.error("DB Error: ", error)
                  next(error)
                  }
                  res.status(201).json({
                        message: "School added successfully",
                  })
            } )
      } catch (error) {
            next(error)
      }
}
