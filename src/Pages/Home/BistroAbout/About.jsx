const About = () => {
  return (
    <div>
      <div
        className="hero h-[570px]"
        style={{
          backgroundImage: "url(https://i.postimg.cc/d0VWjrBK/Rectangle-9.jpg)",
        }}
      >
        <div className="hero-overlay"></div>
        <div className="hero-content mx-6 md:mx-0 px-6 md:px-44 py-4 md:py-16 bg-white">
          <div className="md:max-w-md">
            <h1 className="mb-5 text-4xl uppercase font-semibold text-center">
              Bistro BOss
            </h1>
            <p className="">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque
              aperiam, nihil quam iure similique quisquam in exercitationem
              impedit enim voluptatem fugiat magni fuga libero? Rem fuga dolorem
              saepe commodi sit tenetur molestiae veniam libero, cupiditate
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
