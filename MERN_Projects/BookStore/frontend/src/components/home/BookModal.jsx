import { AiOutlineClose } from "react-icons/ai";
import { PiBookOpenTextLight } from "react-icons/pi";
import { BiUserCircle } from "react-icons/bi";

const BookModal = ({ book, onClose }) => {
  return (
    <div
      className="fixed bg-black bg-opacity-60 top-0 left-0 right-0 bottom-0 z-50 flex justify-center items-center"
      onClick={onClose}
    >
      <div
        onClick={(event) => event.stopPropagation()}
        className="w-[600px] max-w-full h-[400px] bg-white rounded-xl p-4 flex flex-col relative"
      >
        <AiOutlineClose
          className="absolute right-6 top-6 text-3xl text-ted-600 cursor-pointer"
          onClick={onClose}
        />
        <h2 className="w-fit px-4 py-1 bg-red-300 rounded-lg">
          {book.publishYear}
        </h2>
        <h4 className="my-2 text-gray-500"></h4>
        <div className="flex justify-start items-center gap-x-2">
          <PiBookOpenTextLight className="text-red-300 text-2xl" />
          <h2 className="my-1">{book.title}</h2>
        </div>
        <div className="flex justify-start items-center gap-x-2">
          <BiUserCircle className="text-red-300 text-2xl" />
          <h2 className="my-1">{book.author}</h2>
        </div>
        <p className="mt-4">Anything you want to show</p>
        <p className="my-2">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Earum at
          similique distinctio architecto laudantium nihil vitae beatae
          consectetur voluptas rerum! Repudiandae, quae! Hic expedita commodi
          eligendi, id cumque rerum delectus! Fugit aperiam exercitationem
          corporis debitis non, sit cupiditate hic nam dolore ad vel quasi enim
          molestiae fuga cum. Earum vitae dolores delectus doloribus optio qui
          distinctio recusandae, maxime enim dignissimos. Eos ullam numquam amet
          a corporis impedit sed repudiandae esse dolor unde tempora ipsum
          perferendis, ratione suscipit illum sapiente fugit similique? Quae hic
          ad iusto architecto repudiandae earum atque distinctio! Fuga, error
          iste neque quod quam at sequi, debitis impedit a illum officiis modi
          unde ullam, sit sunt inventore mollitia voluptates minus voluptate
          dolorum quasi suscipit? Dolorem officia illo qui? Dolorum iste dolorem
          provident necessitatibus numquam porro. Assumenda iste eligendi
          reiciendis sequi, voluptatem blanditiis? Exercitationem unde nisi
          illum iusto et ipsa, fugiat animi perferendis! Et magnam doloribus
          expedita deserunt architecto?
        </p>
      </div>
    </div>
  );
};

export default BookModal;
