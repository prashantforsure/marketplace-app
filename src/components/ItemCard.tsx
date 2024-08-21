interface ItemCardProps {
    imageSrc: string;
    itemName: string;
  }
  
  const ItemCard: React.FC<ItemCardProps> = ({ imageSrc, itemName }) => {
    return (
      <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-2">
        <div className="bg-white shadow-md rounded-lg overflow-hidden transform transition duration-300 hover:scale-105">
          <img
            src={imageSrc}
            alt={itemName}
            className="w-full h-48 object-cover rounded-t-lg"
          />
          <div className="p-4">
            <h2 className="text-xl font-bold text-center">{itemName}</h2>
          </div>
        </div>
      </div>
    );
  };
  
  export default ItemCard;
  