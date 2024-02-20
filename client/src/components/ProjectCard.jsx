const ProjectCard = ({ data, university, organisation, mentor, student, shop }) => {
  return (
    <div className="flex rounded-md shadow-xl projectCard bg-[#adc4ce] m-2">
      <div className="p-4">
        {/* <p>
          <b>PID:</b> {data._id}
        </p> */}
        <h3>
          <b>ProjectName:</b> {data.projectName}
        </h3>
        <h3>
          <b>University:</b> {data.university}
        </h3>
        <h3>
          <b>Domain:</b> {data.domain}
        </h3>
        <h3>
          <b>Technology Used:</b> {data.techUsed}
        </h3>
        <h3>
          <b>TeamMember(s):</b> {data.teamMembers}
        </h3>
        <h1 className={!mentor && "mb-3"}>
          <b>Description:</b> {data.description}
        </h1>
        {mentor && <h1 className="mb-3">
          <b>Problem:</b> {data.problem}
        </h1>}
        <iframe className="mb-3" width="370" src={data.video}></iframe>
        {mentor && (
          <button className="effect font-bold bg-[#adc4ce] w-38 p-2 mb-2 rounded-md drop-shadow-lg">
            Accept Project Mentorship
          </button>
        )}
        {student && (
          <button className="effect font-bold bg-[#adc4ce] w-38 p-2 mb-2 rounded-md drop-shadow-lg">
            Get Mentorship For This Project
          </button>
        )}
        {organisation && (
          <div>
            <button className="effect font-bold bg-[#adc4ce] p-2 mr-3 mb-2 rounded-md drop-shadow-lg">
              Fund
            </button>
            <button className="effect font-bold bg-[#adc4ce] p-2 mb-2 rounded-md drop-shadow-lg">
              Hire
            </button>
          </div>
        )}
        {shop && (
          <div>
            <button className="effect font-bold bg-[#adc4ce] p-2 mr-3 mb-2 rounded-md drop-shadow-lg">
              Buy Now
            </button>
            <button className="effect font-bold bg-[#adc4ce] p-2 mb-2 rounded-md drop-shadow-lg">
              Add to Cart
            </button>
          </div>
        )}
      </div>
      <div className="p-2">
        {university && (
          <button className="effect font-bold bg-[#adc4ce] w-28 p-2 my-2 rounded-md drop-shadow-lg">
            Accept Project
          </button>
        )}
        {/* <video className="mt-1" controls>
          <source src="/" type="video/mp4" />
          Your Browser Dosen't support video player
        </video> */}
      </div>
    </div>
  );
};

export default ProjectCard;
