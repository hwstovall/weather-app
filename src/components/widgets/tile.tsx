import * as React from 'react';

import '../../styles/components/widgets/tile.scss';

import classNames from 'classnames';

type TileProps = React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>;

export const Tile = ({ children, className, ...rest }: TileProps) => (
  <div className={classNames('tile', className)} {...rest}>{children}</div>
)
