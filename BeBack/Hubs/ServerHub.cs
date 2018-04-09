using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using Microsoft.AspNet.SignalR;


namespace BeBack.Hubs
{
    public class ServerHub : Hub 
    {
        public void StartTimer(int seconds, string title, string subtitle, string message) {
            Clients.All.StartTimer(seconds, title, subtitle, message);
        }

        public void BlackScreenOut()
        {
            Clients.All.BlackScreenOut();
        }

        public void RecoverScreen()
        {
            Clients.All.RecoverScreen();
        }

        public void ChangeTitle(string txt)
        {
            Clients.All.ChangeTitle(txt);
        }

        public void ChangeSubtitle(string txt)
        {
            Clients.All.ChangeSubtitle(txt);
        }

        public void ChangeMessage(string txt)
        {
            Clients.All.ChangeMessage(txt);
        }

        /// <summary>
        /// Changes the text of all 3 lines of text
        /// </summary>
        /// <param name="title">the text of the title</param>
        /// <param name="subtitle">the text of the subtitle</param>
        /// <param name="message">the text of the message</param>
        public void ChangeText(string title, string subtitle, string message)
        {
            Clients.All.ChangeText(title, subtitle, message);
        }

        public void ShowWeek()
        {
            Clients.All.ShowWeek();
        }

        public void ShowMonth()
        {
            Clients.All.ShowMonth();
        }

        public void PageReload()
        {
            Clients.All.PageReload();
        }


        public void UpdatePresence()
        {
            

        }

    }
}