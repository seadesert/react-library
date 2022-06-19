const Reader = (theme) => {
    return(
        <div className='error' style={{'backgroundColor': theme['background'], 'color': theme['text']}}>
            <h1>404: Page not Found</h1>
        </div>
    );
}

export default Reader;