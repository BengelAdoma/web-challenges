import dbConnect from "@/db/connect";
import Product from "@/db/models/Product";

export default async function handler(request, response) {
  await dbConnect();
  const { id } = request.query;

  switch (request.method) {
    case "GET" :
    const product = await Product.findById(id).populate("reviews");

    if (!product) {
      response.status(404).json({ status: "Not Found" });
      return;
    }

    response.status(200).json(product);
    return;


  case 'PUT':
				const updateProduct = request.body;
				console.log('I want to update my entry in the Db', updateProduct);
				await Product.findByIdAndUpdate(id, updateProduct);
				response.status(200).json({ message: "Product successfully updated" });

				break;
        case 'DELETE':
          await Product.findByIdAndDelete(id);
          response.status(200).json({ message: "Product successfully deleted" });
  
          break;
			default:
				response.status(405).json({ status: 'Method not allowed.' });

				break;
		
}
}