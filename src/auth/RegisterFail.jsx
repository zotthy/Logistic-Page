function RegisterFail(){
    return(
<div className="bg-gray-100 min-h-max">
    <div className="bg-white p-6  md:mx-auto">
        <svg viewBox="0 0 24 24" className="text-red-600 w-16 h-16 mx-auto my-6">
            <path fill="currentColor"
                d="M18.364 5.636a.999.999 0 0 0-1.414 0L12 10.586 7.05 5.636a.999.999 0 1 0-1.414 1.414L10.586 12l-4.95 4.95a.999.999 0 1 0 1.414 1.414L12 13.414l4.95 4.95a.999.999 0 1 0 1.414-1.414L13.414 12l4.95-4.95a.999.999 0 0 0 0-1.414z">
            </path>
        </svg>
        <div className="text-center">
            <h3 className="md:text-2xl text-base text-gray-900 font-semibold text-center">Register is Fail</h3>
            <p className="text-gray-600 my-2">Try again!</p>
            <p> Have a great day!  </p>
            <div className="py-10 text-center">
                <a href="/login" className="px-12 bg-indigo-600 hover:bg-indigo-500 text-white font-semibold py-3">
                    GO Register 
               </a>
            </div>
        </div>
    </div>
</div>
    );
}
export default RegisterFail;