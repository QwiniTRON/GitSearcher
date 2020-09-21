import React from 'react'
import archivelogo from '../img/arcive.svg'

export default function Repos({ repos }) {
  return (
    <div className="row ">
      {repos.map((r, i) => (
        <div key={r.id} className="col-lg-4 pb-2 pl-2">
          <div className="card">
            <div className="card-body">
              <h5><a
                rel="noopener noreferrer"
                target="_blank"
                href={r.html_url}
              >{r.name}</a> <object alt="repos" data={archivelogo} type="image/svg+xml">♣</object></h5>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}