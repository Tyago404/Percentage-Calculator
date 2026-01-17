export function MainContainer({children}:{children: React.ReactNode}) {
return(
    <div className="flex flex-col items-center justify-center max-w-300"> 
        {children}
    </div>
)
}