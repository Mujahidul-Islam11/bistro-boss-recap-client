/* eslint-disable react/prop-types */


const SectionIntro = ({heading, intro}) => {
    return (
        <div className="px-6 md:w-[350px] text-center mx-auto my-12">
            <h3 className="md:text-xl text-orange-300">---{heading}---</h3>
            <h3 className="border-y-2 uppercase py-3 font-semibold border-black text-xl md:text-3xl">{intro}</h3>
        </div>
    );
};

export default SectionIntro;